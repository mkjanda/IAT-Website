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


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import org.springframework.validation.Errors;

@JsonInclude(Include.ALWAYS)
public class RequestSoftwareResponse extends SubmissionErrors {
    private final static long serialVersionUID = 1;    
    public String downloadUrl, firstName, lastName, email, use, productKey, downloadPassword;
    public boolean hasErrors = false, clientExists = false, userExists = false, organizationDownload = false, dblClick = false;
    public long clientId = -1, userId = -1;
    
    public RequestSoftwareResponse() {}
    
    public RequestSoftwareResponse(Errors errors) {
        super(errors);
    }
}
