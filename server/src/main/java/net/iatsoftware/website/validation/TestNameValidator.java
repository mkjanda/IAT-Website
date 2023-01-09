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

import net.iatsoftware.website.forms.OauthRegistrationForm;
import net.iatsoftware.website.entities.Client;
import net.iatsoftware.website.repositories.RepositoryManager;

import javax.inject.Inject;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class TestNameValidator implements ConstraintValidator<TestNameValid, OauthRegistrationForm> {
    
    @Inject RepositoryManager repositoryManager;
    
    @Override
    public void initialize(TestNameValid annotation) {}
    
    @Override
    public boolean isValid(OauthRegistrationForm form, ConstraintValidatorContext ctx) {
        Client c = repositoryManager.getClientByProductKey(form.getProductKey());
        if (repositoryManager.isTestRegisteredToClient(c, form.getTestName()))
            return true;
        return false;
    }
}
