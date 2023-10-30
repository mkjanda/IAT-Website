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

import java.util.regex.Pattern;
import javax.inject.Inject;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ProductRequestEmailValidator implements ConstraintValidator<ProductRequestEmailValid, CharSequence> {
    @Inject RepositoryManager repositoryManager;
    
    @Override
    public void initialize(ProductRequestEmailValid annotation) { }
    
    @Override
    public boolean isValid(CharSequence value, ConstraintValidatorContext ctx) {
        String email;
        if (value instanceof String)
            email = (String)value;
        else
            email = value.toString();
        if (repositoryManager.findClientByOrganizationId(email) != null)
            return true;
        Pattern pat = Pattern.compile("[^\\s]+@[^\\s]+\\.[^\\s]+");
        if (pat.matcher(value).matches())
            return true;
        return false;
    }
}
