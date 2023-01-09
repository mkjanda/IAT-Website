package net.iatsoftware.website.services;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class AppContext implements ApplicationContextAware {
    private static ApplicationContext ctx;

    @Override
    public void setApplicationContext(org.springframework.context.ApplicationContext context) {
        ctx = context;
    }

    static public ApplicationContext getContext() {
        return ctx;
    }
}
