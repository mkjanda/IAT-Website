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

import net.iatsoftware.website.repositories.RepositoryManager;

import javax.inject.Inject;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class RegisteredEmailValidator implements ConstraintValidator<RegisteredEmailValid, CharSequence> {
    @Inject RepositoryManager repositoryManager;
    
    @Override
    public void initialize(RegisteredEmailValid annotation) {}
    
    @Override
    public boolean isValid(CharSequence value, ConstraintValidatorContext ctx) {
        String email;
        if (value instanceof String)
            email = (String)value;
        else
            email = value.toString();
        if ((repositoryManager.findUserByEmail(email) == null) && (repositoryManager.findClientByEmail(email) == null))
            return false;
        return true;
    }
    
}
