/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.pojos;

/**
 *
 * @author michael
 */

import net.iatsoftware.website.generated.StackTraceLine;

import java.util.ArrayList;
import java.util.Arrays;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;

@XmlAccessorType(XmlAccessType.NONE)
public class SerializableException extends net.iatsoftware.website.generated.Exception {
    public SerializableException() {}
    
    public SerializableException(String message, StackTraceElement[] stackTrace) {
        this.message = message;
        if (this.stackTrace == null)
            this.stackTrace = new ArrayList<>();
        Arrays.asList(stackTrace).forEach((elem) -> {
            StackTraceLine stl = new StackTraceLine();
            stl.setLineNumber(elem.getLineNumber());
            stl.setClassName(elem.getClassName());
            stl.setFunction(elem.getMethodName());
            this.stackTrace.add(stl);
        });
    }
}
