/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.validation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import jakarta.validation.ReportAsSingleViolation;

/**
 *
 * @author michael
 */


@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy={OauthExampleTokenValidator.class})
@ReportAsSingleViolation
public @interface OauthExampleTokenValid {
    String message() default "Token is already used";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
