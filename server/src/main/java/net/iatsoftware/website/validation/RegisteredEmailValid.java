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

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import jakarta.validation.ReportAsSingleViolation;

@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy={RegisteredEmailValidator.class})
@ReportAsSingleViolation
public @interface RegisteredEmailValid {
    String message() default "This email has not been used to register or activate the software.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
