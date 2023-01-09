package net.iatsoftware.website.startup;

import net.iatsoftware.website.pojos.StartingResources;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.mysql.cj.jdbc.MysqlConnectionPoolDataSource;
import java.nio.charset.StandardCharsets;
import javax.persistence.SharedCacheMode;
import javax.persistence.ValidationMode;
import javax.sql.DataSource;
import org.hibernate.validator.HibernateValidator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.config.BootstrapMode;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.http.converter.xml.MarshallingHttpMessageConverter;
import org.springframework.http.converter.xml.SourceHttpMessageConverter;
import org.springframework.lang.Nullable;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.oxm.Marshaller;
import org.springframework.oxm.Unmarshaller;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.validation.beanvalidation.MethodValidationPostProcessor;
import org.springframework.validation.beanvalidation.SpringValidatorAdapter;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.AsyncHandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Order(1)
@Configuration
@ConfigurationProperties
@SpringBootApplication
@EnableScheduling
@EnableAsync(order = 1)
@EnableTransactionManagement(order = 2)
@ComponentScan(basePackages = "net.iatsoftware.website", useDefaultFilters = false, includeFilters = @ComponentScan.Filter(Controller.class))
@ComponentScan(basePackages = "net.iatsoftware.website", excludeFilters = @ComponentScan.Filter(Controller.class))
@EnableJpaRepositories(basePackages = "net.iatsoftware.website", includeFilters = @ComponentScan.Filter(Repository.class), bootstrapMode = BootstrapMode.DEFERRED)
@EnableAutoConfiguration(exclude = {ThymeleafAutoConfiguration.class})
@EnableConfigurationProperties(Main.class)
@PropertySources({ @PropertySource("application.properties"), @PropertySource("environment.properties"), @PropertySource("user-resources.properties")})
public class Main implements SchedulingConfigurer {

    @Value("${environment.clientSoftwareFilePath}")
    private String clientSoftwareFilePath;

    @Value("${server.port}")
    private final int serverPort = 8082;

    @Bean("ClientSoftwareFilePath")
    public String clientSoftwareFilePath() {
        return clientSoftwareFilePath;
    }

    @Bean
    public ServletWebServerFactory servletContainer() {
        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
        tomcat.setPort(serverPort);
        tomcat.setContextPath("");
        return tomcat;
    }

    @Bean
    public PropertySourcesPlaceholderConfigurer propertySourcesPlaceHolderConfigurer() {
        var p = new PropertySourcesPlaceholderConfigurer();
        p.setLocation(new ClassPathResource("application.properties"));
        return p;
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @ConfigurationProperties(prefix = "mysql.datasource")
    @Bean
    public DataSource dataSource() {
        return new MysqlConnectionPoolDataSource();
    }

    @Bean("MyObjectMapper")
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.findAndRegisterModules();
        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        mapper.configure(DeserializationFeature.ADJUST_DATES_TO_CONTEXT_TIME_ZONE, false);
        mapper.configure(SerializationFeature.INDENT_OUTPUT, true);
        return mapper;
    }

    @Bean({"Marshaller", "Unmarshaller"})
    public Jaxb2Marshaller jaxb2Marshaller() {
        Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
        marshaller.setPackagesToScan("net.iatsoftware.website");
        Map<String, Boolean> properties = new HashMap<>();
        properties.put(javax.xml.bind.Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
        marshaller.setMarshallerProperties(properties);
        return marshaller;
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        Map<String, Object> properties = new HashMap<>();
        properties.put("javax.persistence.schema-generation.database.action", "none");
        HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        adapter.setDatabasePlatform("org.hibernate.dialect.MySQL5InnoDBDialect");
        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(adapter);
        factory.setDataSource(this.dataSource());
        factory.setPackagesToScan("net.iatsoftware.website");
        factory.setSharedCacheMode(SharedCacheMode.ENABLE_SELECTIVE);
        factory.setValidationMode(ValidationMode.NONE);
        factory.setJpaPropertyMap(properties);
        return factory;
    }

    @Bean
    public PlatformTransactionManager transactionManager() {
        return new JpaTransactionManager(this.entityManagerFactory().getObject());
    }

    @Bean(name = "TaskScheduler")
    public ThreadPoolTaskScheduler taskScheduler() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(20);
        scheduler.setThreadNamePrefix("task-");
        scheduler.setAwaitTerminationSeconds(60);
        scheduler.setWaitForTasksToCompleteOnShutdown(true);
        return scheduler;
    }

    private MessageSource errorMessageSource() {
        ReloadableResourceBundleMessageSource msgSource = new ReloadableResourceBundleMessageSource();
        msgSource.setCacheSeconds(-1);
        msgSource.setDefaultEncoding(StandardCharsets.UTF_8.name());
        msgSource.setBasename("classpath:validation");
        return msgSource;
    }

    @Bean
    public LocalValidatorFactoryBean localValidatorFactoryBean() {
        var validator = new LocalValidatorFactoryBean();
        validator.setProviderClass(HibernateValidator.class);
        validator.setValidationMessageSource(errorMessageSource());
        return validator;
    }

    @Bean 
    public MethodValidationPostProcessor MethodValidationPostProcessor() {
        var postProcessor = new MethodValidationPostProcessor();
        postProcessor.setValidator(localValidatorFactoryBean());
        return postProcessor;        
    }

    @ConfigurationProperties("user-resources")
    @Bean
    public StartingResources startingResources() {
        return new StartingResources();
    }

    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
    
            @Inject ObjectMapper objectMapper;
            @Inject Marshaller marshaller;
            @Inject Unmarshaller unmarshaller;
            @Inject SpringValidatorAdapter validator;
            
            @Override
            public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
                converters.add(new ByteArrayHttpMessageConverter());
                converters.add(new StringHttpMessageConverter());
                converters.add(new FormHttpMessageConverter());
                converters.add(new SourceHttpMessageConverter<>());
        
                MarshallingHttpMessageConverter xmlConverter =
                        new MarshallingHttpMessageConverter();
                xmlConverter.setSupportedMediaTypes(Arrays.asList(
                        new MediaType("application", "xml"),
                        new MediaType("text", "xml")
                ));
                xmlConverter.setMarshaller(this.marshaller);
                xmlConverter.setUnmarshaller(this.unmarshaller);
                converters.add(xmlConverter);
                MappingJackson2HttpMessageConverter jsonConverter = new MappingJackson2HttpMessageConverter();
                jsonConverter.setSupportedMediaTypes(Arrays.asList(
                        new MediaType("application", "json"),
                        new MediaType("text", "json")
                ));
                jsonConverter.setObjectMapper(this.objectMapper);
                converters.add(jsonConverter);
            }
           
            @Override 
            public Validator getValidator() {
                return this.validator;
            }

            @Override
            public void addInterceptors(InterceptorRegistry registry) {
                registry.addInterceptor(new AsyncHandlerInterceptor() {
                    private final ConcurrentHashMap<String, Long> tokenMap = new ConcurrentHashMap<>();
                    private final long TOKEN_LIFETIME = 5_000L;
                    @Override
                    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
                        if (!request.getMethod().equals("POST"))
                            return true;
                        if (request.getHeader("token") == null)
                            return true;
                        String token = request.getHeader("token");
                        if (tokenMap.containsKey(request.getHeader("token"))) {
                            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                            return false;
                        }
                        tokenMap.put(token, System.currentTimeMillis());
                        return true;
                    }
                
                    @Override 
                    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, 
                        @Nullable ModelAndView mv) throws Exception {}
                
                    @Override 
                    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, 
                            Object handler, @Nullable Exception ex) throws Exception {
                        if (request.getHeader("token") != null) {
                            tokenMap.remove(request.getHeader("token"));
                        }
                    }

                    @Override
                    public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler) {
                        if (request.getHeader("token") != null) {
                            tokenMap.remove(request.getHeader("token"));
                        }
                    }

                    @Scheduled(initialDelay=10_000L, fixedRate=10_000L)
                    private void cleanTokenMap() {
                        long time = System.currentTimeMillis();
                        List<String> expiredTokens = tokenMap.entrySet().stream().filter(e -> e.getValue() + TOKEN_LIFETIME < time).map(e -> e.getKey()).collect(Collectors.toList());
                        expiredTokens.forEach(t -> tokenMap.remove(t));
                    }
                }).addPathPatterns("/FormSubmissions/*");
            }
        };
    }

    @Override
    public void configureTasks(ScheduledTaskRegistrar registrar) {
        registrar.setTaskScheduler(taskScheduler());
    }
}
