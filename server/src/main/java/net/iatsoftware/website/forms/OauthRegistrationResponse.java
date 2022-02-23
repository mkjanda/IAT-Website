/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.forms;

import org.springframework.validation.Errors;

/**
 *
 * @author michael
 */

public class OauthRegistrationResponse extends SubmissionErrors {
    private static final long serialVersionUID = 1;    
    public String clientId = "", clientSecret = "", redirect = "";
    public boolean alreadyRegistered = false;


    public OauthRegistrationResponse(){}

    public OauthRegistrationResponse(Errors errors) {
        super(errors);
    }
}
