/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.forms;

/**
 *
 * @author michael
 */

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.validation.Errors;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class SubmissionErrors implements java.io.Serializable {
    private final static long serialVersionUID = 1;
    private final Errors errors;

    public SubmissionErrors() {
        errors = null;
    }

    public SubmissionErrors(Errors errors) {
        this.errors = errors;
    }

    @JsonProperty("globalErrors")
    public List<String> getGlobalErrors() {
        if (this.errors == null)
            return new ArrayList<>();
        var errorList = new ArrayList<String>();
        errors.getGlobalErrors().forEach((g) -> errorList.add(g.getDefaultMessage()));
        return errorList;
    }

    @JsonProperty("fieldErrors")
    public Map<String, String> getFieldErrors() {
        if (this.errors == null) {
            return new HashMap<>();
        }
        var errorMap = new HashMap<String, String>();
        errors.getFieldErrors().forEach((fe) -> errorMap.put(fe.getField(), fe.getDefaultMessage()));
        return errorMap;
    }

    @JsonProperty("hasErrors")
    public boolean isHasErrors() {
        if (this.errors == null) {
            return false;
        }
        return ((errors.getFieldErrors().size() > 0) || (errors.getGlobalErrors().size() > 0));
    }
}
