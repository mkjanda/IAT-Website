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


import net.iatsoftware.website.validation.OauthExampleTokenValid;

import jakarta.validation.constraints.NotBlank;



public class OauthExampleTokenForm {

    public OauthExampleTokenForm() {}
    
    @NotBlank(message = "{validate.oauthToken.blank}")
    @OauthExampleTokenValid(message = "{validate.oauthToken.tokenTaken}")
    private String oauthExampleTokenValue = null;
    
    public String getOauthExampleTokenValue() {
        return oauthExampleTokenValue;
    }
    
}
