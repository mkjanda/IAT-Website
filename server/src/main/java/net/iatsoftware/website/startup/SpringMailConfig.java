package net.iatsoftware.website.startup;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.context.WebApplicationContext;

import java.util.Properties;
import javax.inject.Inject;

@Configuration
@PropertySource("classpath:email/email-config.properties")
public class SpringMailConfig  {
    
    private final String JAVA_MAIL_FILE = "classpath:email/java-mail-config.properties";
    @Inject private WebApplicationContext applicationContext;
    
    
    @Value("${mail.host}")
    private String mailServerHost;
    
    @Value("${mail.protocol}")
    private String mailServerProtocol;
    
    @Value("${mail.port}")
    private int mailServerPort;
    
    @Value("${mail.username}")
    private String mailServerUsername;
    
    @Value("${mail.password}")
    private String mailServerPassword;
    
    @Bean
    public JavaMailSender mailSender() throws java.io.IOException {
        final JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(mailServerHost);
        mailSender.setPort(mailServerPort);
        mailSender.setProtocol(mailServerProtocol);
        mailSender.setUsername(mailServerUsername);
        mailSender.setPassword(mailServerPassword);
        
        final Properties javaMailProperties = new Properties();
        javaMailProperties.load(applicationContext.getResource(JAVA_MAIL_FILE).getInputStream());
        mailSender.setJavaMailProperties(javaMailProperties);
        return mailSender;
    }
}
