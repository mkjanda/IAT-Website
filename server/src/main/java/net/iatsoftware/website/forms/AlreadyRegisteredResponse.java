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

import org.springframework.validation.Errors;

public class AlreadyRegisteredResponse extends SubmissionErrors {
    private static final long serialVersionUID = 1L;
    public String downloadUrl, firstName, lastName, email, needed, downloadPassword;
    public boolean hasErrors = false, productKeySent = false, download = false, noSuchEmail = false, emailSentToClient = false;
    public long clientId = -1;
    
    public AlreadyRegisteredResponse() {}
    
    public AlreadyRegisteredResponse(Errors errors, String email, String needed) {
        super(errors);
        if (!errors.getFieldErrors("email").isEmpty())
            this.noSuchEmail = true;
        this.email = email;
        this.needed = needed;
    }
}
