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
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class RedirectValidator implements ConstraintValidator<RedirectValid, CharSequence> {
    
    @Override
    public void initialize(RedirectValid annotation) {}
    
    @Override
    public boolean isValid(CharSequence value, ConstraintValidatorContext ctx) {
        try  {
            var uri = new URL(value.toString());
            if (uri.getQuery() != null)
                return false;
            if (!uri.getProtocol().equals("https") && uri.getHost().equals("127.0.0.1"))
                return true;
            else if (!uri.getProtocol().equals("https")) {
                return false;
            }
            return true;
        }
        catch (java.net.MalformedURLException ex) {
            return false;
        }
    }
}
