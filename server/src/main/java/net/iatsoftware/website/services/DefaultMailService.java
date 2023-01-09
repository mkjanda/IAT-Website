/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.services;

/**
 *
 * @author michael
 */

import net.iatsoftware.website.pojos.EmailParameters;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;
import org.thymeleaf.templateresolver.StringTemplateResolver;
import org.thymeleaf.TemplateEngine;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import javax.inject.Inject;
import javax.mail.internet.MimeMessage;

@Service("MailService")
@PropertySource("classpath:environment.properties")
public class DefaultMailService implements MailService {

    @Value("${mail.user-personal}")
    private String senderPersonal;

    @Value("${mail.user-address}")
    private String senderAddress;
    private static final Logger logger = LogManager.getLogger();
    @Inject
    JavaMailSender mailSender;

    @Override
    public void sendEmail(EmailParameters params) throws javax.mail.MessagingException {
        try {
            final Context ctx = new Context();
            ctx.setVariables(params.getParameters());
            final MimeMessage message = mailSender.createMimeMessage();
            final MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(senderAddress, senderPersonal);
            helper.setTo(params.getDestAddr());
            helper.setSubject(params.getSubject());
            final String htmlBody = templateEngine().process(params.getTemplateName(), ctx);
            helper.setText(htmlBody, true);
            params.getInlineImages().forEach((trip) -> {
                try {
                    helper.addInline(trip.getFirst(), new ClassPathResource(trip.getSecond()),
                            "image/" + trip.getSecond().substring(trip.getSecond().lastIndexOf('.')));
                    ctx.setVariable(trip.getFirst(), trip.getThird());
                } catch (javax.mail.MessagingException ex) {
                    logger.error("Error embedding inline image " + trip.getFirst() + " in email", ex);
                }
            });
            mailSender.send(message);
        } catch (java.io.UnsupportedEncodingException ex) {
        }
    }

    @Bean(name = "EmailTemplateEngine")
    TemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.addTemplateResolver(textTemplateResolver());
        templateEngine.addTemplateResolver(htmlTemplateResolver());
        templateEngine.addTemplateResolver(stringTemplateResolver());
        return templateEngine;
    }

    private ITemplateResolver textTemplateResolver() {
        ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
        templateResolver.setOrder(1);
        templateResolver.setResolvablePatterns(new HashSet<>(Arrays.asList("email/**.txt", "email/**.js", "email/**.css")));
        templateResolver.setTemplateMode(TemplateMode.TEXT);
        templateResolver.setCharacterEncoding("UTF-8");
        templateResolver.setCacheable(false);
        return templateResolver;
    }

    private ITemplateResolver htmlTemplateResolver() {
        final ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
        templateResolver.setOrder(2);
        templateResolver.setResolvablePatterns(Collections.singleton("email/**.html"));
        templateResolver.setTemplateMode(TemplateMode.HTML);
        templateResolver.setCharacterEncoding("UTF-8");
        templateResolver.setCacheable(false);
        return templateResolver;
    }

    private ITemplateResolver stringTemplateResolver() {
        StringTemplateResolver templateResolver = new StringTemplateResolver();
        templateResolver.setOrder(3);
        templateResolver.setTemplateMode(TemplateMode.HTML);
        templateResolver.setCacheable(false);
        return templateResolver;
    }

}
