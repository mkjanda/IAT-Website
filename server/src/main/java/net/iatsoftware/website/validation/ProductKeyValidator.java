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


public class ProductKeyValidator implements ConstraintValidator<ProductKeyValid, CharSequence> {
    
    @Inject RepositoryManager repositoryManager;
    
    @Override
    public void initialize(ProductKeyValid annotation) {}
    
    @Override
    public boolean isValid(CharSequence value, ConstraintValidatorContext ctx) {
        String productKey;
        if (value instanceof String)
            productKey = (String)value;
        else
            productKey = value.toString();
        if (repositoryManager.productKeyExists(productKey))
            return true;
        return false;
    }
}
