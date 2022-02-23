/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.forms;

/**
 *
 * @author michael
 */

import com.fasterxml.jackson.annotation.JsonProperty;

import net.iatsoftware.website.validation.DomainValid;
import net.iatsoftware.website.validation.ProductKeyValid;


public class CorsForm {
    private String productKey, domain;
    boolean allowHttp;
    
    public CorsForm() {}
    
    @ProductKeyValid(message="{validate.corsForm.productKeyInvalid}")
    public String getProductKey() {
        return productKey;
    }
    public void setProductKey(String val) {
        productKey = val;
    }
    
    @JsonProperty("domain")
    @DomainValid(message="{validate.corsForm.domainInvalid}")
    public String getDomain() {
        return domain;
    }
    public void setDomain(String val) {
        domain = val;
    }
    
    @JsonProperty("http")
    public boolean getAllowHttp() {
        return allowHttp;
    }
    public void setAllowHttp(boolean val) {
        allowHttp = val;
    }
}
