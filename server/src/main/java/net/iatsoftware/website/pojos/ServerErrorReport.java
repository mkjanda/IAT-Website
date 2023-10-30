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

import java.util.ArrayList;
import java.util.Date;
import java.text.DateFormat;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="ServerErrorReport")
@XmlAccessorType(XmlAccessType.NONE)
public class ServerErrorReport extends net.iatsoftware.website.generated.ServerErrorReport {
    private static final DateFormat df = DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.MEDIUM);;
	
    public ServerErrorReport() {}
    
    public ServerErrorReport(Exception ex) {
        this.timestamp = df.format(new Date(System.currentTimeMillis()));
        this.exception = new SerializableException(ex.getMessage(), ex.getStackTrace());
        if (this.innerException == null)
            this.innerException = new ArrayList<>();
        Throwable t = ex;
        while ((t = t.getCause()) != null)
            this.innerException.add(new SerializableException(t.getMessage(), t.getStackTrace()));
    }
}
