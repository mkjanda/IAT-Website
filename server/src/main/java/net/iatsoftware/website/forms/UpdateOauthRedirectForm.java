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

import net.iatsoftware.website.validation.RedirectValid;


public class UpdateOauthRedirectForm {
    private String newRedirect;

    private String clientId;
    
    @RedirectValid(message="{validate.oauthRegistrationForm.invalidRedirect}")
    public String getNewRedirect() {
        return newRedirect;
    }
    public void setNewRedirect(String val) {
        newRedirect = val;
    }
    
    public String getClientId() {
        return clientId;
    }
    public void setClientId(String val) {
        clientId = val;
    }
}
