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

import java.net.URL;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class DomainValidator implements ConstraintValidator<DomainValid, CharSequence> {
    
    @Override
    public boolean isValid(CharSequence domain, ConstraintValidatorContext ctx) {
        String domString = domain.toString();
        if (domString.startsWith("www."))
            return false;
        if (domString.contains("/"))
            return false;
        if (!domString.contains("."))
            return false;
        try {
            new URL("http://" + domString);
            return true;
        }
        catch (java.net.MalformedURLException ex) {
            return false;
        }
    }
}
