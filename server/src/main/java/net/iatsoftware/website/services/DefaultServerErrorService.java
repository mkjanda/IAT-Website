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
import net.iatsoftware.website.pojos.ServerErrorReport;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.function.Consumer;
import java.util.Enumeration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import javax.inject.Inject;

@Service
@PropertySource("classpath:environment.properties")
public class DefaultServerErrorService implements ServerErrorService {

    @Inject
    MailService mailService;
    
    private final ConcurrentHashMap<Long, ServerErrorReport> Errors = new ConcurrentHashMap<>();
    private final Logger logger = LogManager.getLogger();
    
    @Value("${mail.error-report-recipient.username}")  
    private String errorReportRecipient;

    @Override
    public Long storeError(Exception ex) {
        Long id = System.currentTimeMillis();
        while (Errors.containsKey(id))
            id = System.currentTimeMillis();
        Errors.put(id, new ServerErrorReport(ex));
        return id;
    }
    
    @Override
    public void reportError(long errorId, String email) throws jakarta.mail.MessagingException {
        ServerErrorReport report = Errors.remove(errorId);
        EmailParameters params = new EmailParameters(errorReportRecipient, "Website Error", "email/server-error-report.html");
        params.addParameter("report", report);
        params.addParameter("userEmail", email);
        mailService.sendEmail(params);
    }
    
    @Override
    public void reportError(Exception ex)  throws jakarta.mail.MessagingException {
        EmailParameters params = new EmailParameters("sysinfo", "Website Error", "email/server-error-report.html");
        params.addParameter("report", new ServerErrorReport(ex));
        params.addParameter("userEmail", "");
        mailService.sendEmail(params);
                
    }
    
    @Scheduled(initialDelay = 3_600_000L, fixedRate = 3_600_000L)
    public void cleanErrors() {
        var errors = Errors;
        errors.forEachEntry(100, new Consumer<Map.Entry<Long, ServerErrorReport>>()  {
            public void accept(Map.Entry<Long, ServerErrorReport> T) {
                if (T.getKey() + 3_600_000L < System.currentTimeMillis())
                    Errors.put(T.getKey(), T.getValue());
            }
        });
        for (Enumeration<Long> e = Errors.keys(); e.hasMoreElements();) {
            Long id = e.nextElement();
            if (id + 3_600_000L < System.currentTimeMillis()) {
                try {
                    reportError(id, "UNKNOWN USER");
                }
                catch (Exception ex) {
                    logger.error("Error reporting anonymous website error", ex);
                }
            }
            Errors.remove(id);
        }
    }
}
