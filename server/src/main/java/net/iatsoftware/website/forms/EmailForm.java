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
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class EmailForm {

    public EmailForm(){}
    
    @NotBlank(message = "{validate.emailForm.emailBlank}")
    @Email(message = "{validate.emailForm.emailInvalid}")
    private String email;
    
    @NotBlank(message="{validate.emailForm.missingErrorId}")
    private Long errorId;

    public String getEmail() {
        return email;
    }
    public void setEmail(String val) {
        email = val;
    }
    
    public Long getErrorId() {
        return this.errorId;
    }
    public void setErrorId(Long val) {
        this.errorId = val;
    }
}
