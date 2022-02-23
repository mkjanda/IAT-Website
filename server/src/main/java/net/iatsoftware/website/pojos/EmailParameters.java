package net.iatsoftware.website.pojos;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmailParameters {
    private final HashMap<String, Object> parameters = new HashMap<>();
    private final List<Triplet<String, String, String>> inlineImages = new ArrayList<>();
    private final String destAddr, subject, templateName;
    
    public EmailParameters(String destAddr, String subject, String templateName)
    {
        this.destAddr = destAddr;
        this.subject = subject;
        this.templateName = templateName;
    }
    
    public void addParameter(String name, Object value) {
        parameters.put(name, value);
    }
    
    public void addInlineImage(String name, String path, String url) {
        inlineImages.add(new Triplet<>(name, path, url));
    }
    
    public Map<String, Object> getParameters() {
        return parameters;
    }
    
    public List<Triplet<String, String, String>> getInlineImages() {
        return inlineImages;
    }
    
    public String getDestAddr() {
        return this.destAddr;
    }
    public String getSubject() {
        return this.subject;
    }
    public String getTemplateName() {
        return templateName;
    }
}
