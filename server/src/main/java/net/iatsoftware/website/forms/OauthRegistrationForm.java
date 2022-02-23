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


import net.iatsoftware.website.entities.Client;
import net.iatsoftware.website.entities.IAT;
import net.iatsoftware.website.repositories.RepositoryManager;
import net.iatsoftware.website.validation.ProductKeyValid;
import net.iatsoftware.website.validation.PasswordValid;
import net.iatsoftware.website.validation.RedirectValid;
import net.iatsoftware.website.validation.TestNameValid;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.NotBlank;


@TestNameValid(message="{validate.oauthRegistrationForm.noSuchTest}")
@PasswordValid(message="{validate.oauthRegistrationForm.wrongPassword}")
@Component("prototype")
public class OauthRegistrationForm {
    
    @Inject RepositoryManager repositoryManager;

    private String productKey;
    
    private String testName;
    
    private String password;
    
    private String redirect;
    private boolean subPaths;
    
    @AssertTrue(message="{validate.oauthRegistrationForm.needRedirectForNewClient}")
    public boolean redirectSuppliedForNewUser() {
        Client client = repositoryManager.getClientByProductKey(getProductKey());
        IAT test = repositoryManager.getTest(client, getTestName());
        if ((test.getOauthClientId() == null) && (getRedirect().trim() == "")) {
            return false;
        }
        return true;
    }


    @NotBlank(message="{validate.oauthRegistrationForm.noProductKey}") 
    @ProductKeyValid(message="{validate.oauthRegistrationForm.productKeyInvalid}")
    public String getProductKey() {
        return productKey.trim();
    }
    public void setProductKey(String val) {
        productKey = val;
    }
    
    @NotBlank(message="{validate.oauthRegistrationForm.noTestName}")
    public String getTestName() {
        return testName.trim();
    }
    public void setTestName(String val) {
        testName = val;
    }
    
    @NotBlank(message="{validate.oauthRegistrationForm.noPassword}")
    public String getPassword() {
        return password.trim();
    }
    public void setPassword(String val) {
        password = val;
    }
    
    @NotBlank(message="{validate.oauthRegistrationForm.noRedirectSupplied}")
    @RedirectValid(message="{validate.oauthRegistrationForm.invalidRedirect}")
    public String getRedirect() {
        return redirect.trim();
    }
    public void setRedirect(String val) {
        redirect = val;
    }
    
    @JsonProperty("subpaths")
    public boolean isSubPaths() {
        return subPaths;
    }
    public void setSubpaths(boolean val) {
        subPaths = val;
    }
    
}
