package net.iatsoftware.website.controllers;

import net.iatsoftware.website.entities.Client;
import net.iatsoftware.website.entities.CorsOrigin;
import net.iatsoftware.website.entities.IAT;
import net.iatsoftware.website.entities.User;
import net.iatsoftware.website.pojos.ProductKey;
import net.iatsoftware.website.forms.AlreadyRegisteredForm;
import net.iatsoftware.website.forms.AlreadyRegisteredResponse;
import net.iatsoftware.website.forms.CorsForm;
import net.iatsoftware.website.forms.EmailForm;
import net.iatsoftware.website.forms.OauthRegistrationForm;
import net.iatsoftware.website.forms.OauthRegistrationResponse;
import net.iatsoftware.website.forms.RequestSoftwareForm;
import net.iatsoftware.website.forms.RequestSoftwareResponse;
import net.iatsoftware.website.forms.SubmissionErrors;
import net.iatsoftware.website.forms.UpdateOauthRedirectForm;
import net.iatsoftware.website.pojos.EmailParameters;
import net.iatsoftware.website.repositories.RepositoryManager;
import net.iatsoftware.website.services.MailService;
import net.iatsoftware.website.services.ServerErrorService;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URLEncoder;
import java.util.Base64;
import java.util.Random;
import javax.inject.Inject;
import javax.validation.Valid;

@Controller
@RequestMapping("/FormSubmissions")
@PropertySources({
    @PropertySource("classpath:environment.properties")})
public class FormSubmissions {

    public FormSubmissions(){}

    private static final Logger logger = LogManager.getLogger();

    @Inject
    ApplicationContext applicationContext;
    @Inject
    MailService mailService;
    @Inject
    RepositoryManager repositoryManager;
    @Inject
    ServerErrorService serverErrorService;

    @Value("${environment.downloadControllerPath}")
    private String downloadControllerPath;
    @Value("${mail.image.logo-url}")
    private String logoUrl;
    @Value("${mail.image.logo-classpath-location}")
    private String logoClasspathLocation;
    @Value("${mail.image.header-url}")
    private String headerImageUrl;
    @Value("${mail.image.header-classpath-location}")
    private String headerImageClasspathLocation;

    private final Base64.Encoder b64Encoder = Base64.getEncoder();
    private final Random rand = new Random();

    @PostMapping(value = "/RequestProduct", produces = "text/json")
    @ResponseBody
    public ResponseEntity<RequestSoftwareResponse> requestProduct(@Valid RequestSoftwareForm form, Errors errors,
            @RequestHeader(name="token") String token) {
        if (errors.hasErrors()) {
            return new ResponseEntity<>(new RequestSoftwareResponse(errors), HttpStatus.OK);
        }
        Client c = repositoryManager.findClientByEmail(form.getEmail());
        User u = repositoryManager.findUserByEmail(form.getEmail());
        if (u != null) {
            RequestSoftwareResponse response = new RequestSoftwareResponse();
            response.userExists = true;
            response.userId = u.getUserId();
            response.email = form.getEmail();
            response.firstName = form.getFirstName();
            response.lastName = form.getLastName();
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        if (c != null) {
            RequestSoftwareResponse response = new RequestSoftwareResponse();
            response.clientExists = true;
            response.clientId = c.getClientId();
            response.email = form.getEmail();
            response.firstName = form.getFirstName();
            response.lastName = form.getLastName();
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        RequestSoftwareResponse response = new RequestSoftwareResponse();
        c = repositoryManager.findClientByOrganizationId(form.getEmail());
        String downloadPass;
        if (c != null) {
            response.organizationDownload = true;
        } else {
            byte[] downloadPassData = new byte[15];
            rand.nextBytes(downloadPassData);
            downloadPass = b64Encoder.encodeToString(downloadPassData);
            ProductKey productKey = repositoryManager.getNewProductKey();
            c = new Client(productKey.getProductKey(), downloadPass, form);
          //  applicationContext.getBean(Client.class, productKey.getProductKey(), downloadPass, form);
            try {
                repositoryManager.addClient(c);
            } catch (javax.persistence.PersistenceException ex) {
                return new ResponseEntity<>((RequestSoftwareResponse) null, HttpStatus.TOO_MANY_REQUESTS);
            }
        }
        response.downloadUrl = downloadControllerPath;
        response.downloadPassword = URLEncoder.encode(c.getDownloadPassword(), java.nio.charset.StandardCharsets.UTF_8);
        response.clientId = c.getClientId();
        response.email = form.getEmail();
        response.firstName = form.getFirstName();
        response.lastName = form.getLastName();
        response.productKey = c.getProductKey();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping(value = "/AlreadyRegistered", produces = "text/json")
    @ResponseBody
    public ResponseEntity<AlreadyRegisteredResponse> alreadyRegisteredRequest(@Valid AlreadyRegisteredForm form, Errors errors,
            @RequestHeader(name="token") String token) throws javax.mail.MessagingException {
        Client c = repositoryManager.findClientByEmail(form.getEmail());
        User u = repositoryManager.findUserByEmail(form.getEmail());
        AlreadyRegisteredResponse response = new AlreadyRegisteredResponse();
        if (errors.hasErrors()) {
            return new ResponseEntity<>(new AlreadyRegisteredResponse(errors, form.getEmail(), form.getNeeded()), HttpStatus.OK);
        }
        if (form.getNeeded().equals("download")) {
            String downloadPassword;
            if (u != null) {
                downloadPassword = u.getClient().getDownloadPassword();
                response.firstName = u.getFName();
                response.lastName = u.getLName();
                response.email = form.getEmail();
                response.clientId = u.getClient().getClientId();
            } else {
                downloadPassword = c.getDownloadPassword();
                response.firstName = c.getContactFName();
                response.lastName = c.getContactLName();
                response.email = form.getEmail();
                response.clientId = c.getClientId();
            }
            response.downloadPassword = URLEncoder.encode(downloadPassword, java.nio.charset.StandardCharsets.UTF_8);
            response.downloadUrl = downloadControllerPath;
            response.download = true;
        } else {
            if (c == null) {
                c = u.getClient();
                response.downloadPassword = c.getDownloadPassword();
                response.firstName = u.getFName();
                response.lastName = u.getLName();
                response.email = form.getEmail();
                response.clientId = c.getClientId();
                response.emailSentToClient = false;
            } else {
                response.downloadPassword = c.getDownloadPassword();
                response.firstName = c.getContactFName();
                response.lastName = c.getContactLName();
                response.email = form.getEmail();
                response.clientId = c.getClientId();
                response.emailSentToClient = true;
            }
            EmailParameters params = new EmailParameters(form.getEmail(), "IAT Design Product Key", "email/product-key.html");
            params.addParameter("productKey", c.getProductKey());
            params.addParameter("clientId", Long.toString(c.getClientId()));
            params.addParameter("downloadPassword", URLEncoder.encode(c.getDownloadPassword(), java.nio.charset.StandardCharsets.UTF_8));
            params.addParameter("downloadUrl", "https://www.iatsoftware.net/DownloadSoftware?password=" + URLEncoder.encode(c.getDownloadPassword(), java.nio.charset.StandardCharsets.UTF_8) + "&clientId=" + Long.toString(c.getClientId()));
            if (u == null) {
                params.addParameter("userName", c.getFullName());
            } else {
                params.addParameter("userName", u.getFullName());
            }
            params.addInlineImage("header", headerImageClasspathLocation, headerImageUrl);
            params.addInlineImage("logo", logoClasspathLocation, logoUrl);
            mailService.sendEmail(params);
            response.productKeySent = true;
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping(value = "/ErrorReport", produces = "text/plain")
    ResponseEntity<String> reportError(@Valid EmailForm errorReport, Errors errors) throws java.io.IOException, javax.mail.MessagingException {
        if (errors.hasErrors()) {
            return new ResponseEntity<>(errors.getFieldErrors("email").get(0).getDefaultMessage(), HttpStatus.OK);
        }
        serverErrorService.reportError(errorReport.getErrorId(), errorReport.getEmail());
        return new ResponseEntity<>("reported", HttpStatus.OK);
    }

    @RequestMapping(value = "/OauthRegistration", produces = "text/json")
    public ResponseEntity<OauthRegistrationResponse> registerOauth(@Valid OauthRegistrationForm form, Errors errors,
            @RequestHeader(name="token") String token) {
            if (errors.hasErrors()) {
                return new ResponseEntity<>(new OauthRegistrationResponse(errors), HttpStatus.OK);
            }
            OauthRegistrationResponse response = new OauthRegistrationResponse();
            Client c = repositoryManager.getClientByProductKey(form.getProductKey());
            IAT test = repositoryManager.getTest(c, form.getTestName());
            if (test.getOauthClientId() != null) {
                response.clientId = test.getOauthClientId();
                response.clientSecret = test.getOauthClientSecret();
                test.setOauthSubpathRedirects(form.isSubPaths());
                if (!form.getRedirect().trim().equals("")) {
                    test.setOauthClientRedirect(form.getRedirect());
                    response.redirect = form.getRedirect();
                } else {
                    response.redirect = test.getOauthClientRedirect();
                }
                repositoryManager.update(test);
                response.alreadyRegistered = true;
            } else {
                byte[] randomBytes = new byte[8];
                rand.nextBytes(randomBytes);
                response.clientId = "CLIENT" + Long.toString(test.getClient().getClientId()) + ":" + form.getTestName() + ":";
                for (int ctr = 0; ctr < randomBytes.length; ctr++) {
                    String byteStr = Integer.toHexString(Byte.toUnsignedInt(randomBytes[ctr]));
                    response.clientId += (byteStr.length() == 1) ? ("0" + byteStr) : byteStr;
                }
                test.setOauthClientId(response.clientId);
                response.clientSecret = "secret:";
                randomBytes = new byte[16];
                rand.nextBytes(randomBytes);
                for (int ctr = 0; ctr < randomBytes.length; ctr++) {
                    String byteStr = Integer.toHexString(Byte.toUnsignedInt(randomBytes[ctr]));
                    response.clientSecret += (byteStr.length() == 1) ? ("0" + byteStr) : byteStr;
                }
                test.setOauthClientSecret(response.clientSecret);
                response.redirect = form.getRedirect();
                test.setOauthClientRedirect(response.redirect);
                test.setOauthSubpathRedirects(form.isSubPaths());
                repositoryManager.update(test);
            }
            return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping(value = "/UpdateOauthRedirect", produces = "text/plain")
    public ResponseEntity<String> updateOauthRedirect(@Valid UpdateOauthRedirectForm form, Errors e,
            @RequestHeader(name="token") String token) {
        try {
            if (e.hasErrors()) {
                return new ResponseEntity<>(e.getAllErrors().get(0).getDefaultMessage(), HttpStatus.OK);
            }
            IAT test = repositoryManager.getTestByOauthClientId(form.getClientId());
            test.setOauthClientRedirect(form.getNewRedirect());
            repositoryManager.update(test);
            return new ResponseEntity<>("updated", HttpStatus.OK);
        } catch (Exception ex) {
            logger.error("Error updating oauth redirect", ex);
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(ServletUriComponentsBuilder.fromCurrentRequest().build().toUri());
            headers.add("Error-Id", serverErrorService.storeError(ex).toString());
            return new ResponseEntity<>("", headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/CorsRegistration", produces = "text/json")
    public ResponseEntity<SubmissionErrors> registerCors(@Valid CorsForm corsForm, Errors errors,
            @RequestHeader(name="token") String token) {
        try {
            if (errors.hasErrors()) {
                return new ResponseEntity<>(new SubmissionErrors(errors), HttpStatus.OK);
            } else {
                Client c = repositoryManager.getClientByProductKey(corsForm.getProductKey());
                CorsOrigin cors = new CorsOrigin(c, corsForm.getDomain());
                repositoryManager.setCorsOrigin(cors);
                return new ResponseEntity<>(new SubmissionErrors(), HttpStatus.OK);
            }
        } catch (Exception ex) {
            logger.error("Error processing cors origin registration", ex);
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(ServletUriComponentsBuilder.fromCurrentRequest().build().toUri());
            headers.add("Error-Id", serverErrorService.storeError(ex).toString());
            return new ResponseEntity<>(null, headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleError(Exception ex) {
        logger.error("Error processing form submission", ex);
        try {
            serverErrorService.reportError(ex);
        }
        catch (javax.mail.MessagingException mex) {
            logger.error("Error sending error notification email", mex);
        }
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
