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


import net.iatsoftware.website.validation.RegisteredEmailValid;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;



public class AlreadyRegisteredForm {
    @NotBlank(message="{validate.alreadyRegistered.noSelection}")
    private String needed;
    @NotBlank(message="{validate.alreadyRegistered.noEmail}")
    @Email(message="{validate.alreadyRegistered.invalidEmail}")
    @RegisteredEmailValid(message="{validate.alreadyRegistered.noSuchEmail}")
    private String email;
    
    public String getNeeded() {
        return this.needed;
    }
    public void setNeeded(String val) {
        this.needed = val;
    }
    
    public String getEmail() {
        return this.email;
    }
    public void setEmail(String val) {
        this.email = val;
    }
}
