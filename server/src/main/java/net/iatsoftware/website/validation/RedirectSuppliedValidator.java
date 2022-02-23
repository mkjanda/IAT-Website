/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.validation;

/**
 *
 * @author michael
 */

import net.iatsoftware.website.entities.Client;
import net.iatsoftware.website.entities.IAT;
import net.iatsoftware.website.forms.OauthRegistrationForm;
import net.iatsoftware.website.repositories.RepositoryManager;

import javax.inject.Inject;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class RedirectSuppliedValidator implements ConstraintValidator<RedirectSuppliedValid, OauthRegistrationForm> {
    
    @Inject RepositoryManager repositoryManager;
    
    @Override
    public void initialize(RedirectSuppliedValid annotation) {}
    
    @Override
    public boolean isValid(OauthRegistrationForm form, ConstraintValidatorContext ctx) {
        Client c = repositoryManager.getClientByProductKey(form.getProductKey());
        IAT test = repositoryManager.getTest(c, form.getTestName());
        if (test == null)
            return true;
        String redirect = (form.getRedirect() == null) ? "" : form.getRedirect().trim();
        if ((test.getOauthClientId() == null) && (redirect.equals("")))
            return false;
        return true;
    }
}
