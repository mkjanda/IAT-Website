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

import net.iatsoftware.website.validation.ProductRequestEmailValid;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class RequestSoftwareForm {
    @NotBlank(message="{validate.productRequest.noFirstName}")
    @Pattern(regexp="[A-Za-z'\\s\\.\\-]*\\s*", message="{validate.productRequest.invalidFirstName}")
    private String firstName;

    @NotBlank(message="{validate.productRequest.noLastName}")
    @Pattern(regexp="[A-Za-z'\\s\\.\\-]*\\s*", message="{validate.productRequest.invalidLastName}")
    private String lastName;

    @NotBlank(message="{validate.productRequest.noEmail}")
    @ProductRequestEmailValid(message="{validate.productRequest.invalidEmail}")
    private String email;

    @NotBlank(message="{validate.productRequest.noProductUse}")
    @Size(min=30, message="{validate.productRequest.shortProductUse}")
    @Size(max=65535, message="{validate.productRequest.longProductUse}")
    private String use;
    
    public void setFirstName(String val) {
        this.firstName = val.trim();
    }
    public String getFirstName() {
        return this.firstName;
    }
    
    public void setLastName(String val) {
        this.lastName = val.trim();
    }
    public String getLastName() {
        return this.lastName;
    }
    
    public void setEmail(String val) {
        this.email = val.trim();
    }
    public String getEmail() {
        return this.email;
    }
    
    public void setUse(String val) {
        this.use = val.trim();
    }
    public String getUse() {
        return this.use;
    }
}
