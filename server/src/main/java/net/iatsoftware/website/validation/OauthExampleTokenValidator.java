/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.validation;

import net.iatsoftware.website.repositories.RepositoryManager;

import javax.inject.Inject;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;


/**
 *
 * @author michael
 */
public class OauthExampleTokenValidator implements ConstraintValidator<OauthExampleTokenValid, CharSequence>{
    
    @Inject RepositoryManager repositoryManager;
    @Inject String oauthExampleTestName;
    @Inject Long oauthExampleClientId;
    
    @Override
    public void initialize(OauthExampleTokenValid annotation) {}
    
    @Override
    public boolean isValid(CharSequence token, ConstraintValidatorContext ctx) {
        return !repositoryManager.isTokenInUse(oauthExampleClientId, oauthExampleTestName, ((String)token).getBytes(java.nio.charset.StandardCharsets.UTF_8));
    }
}
