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
public class ErrorReport {
    private String message;
    private long errorId;
    
    public ErrorReport(long id, String message) {
        this.message = message;
        errorId = id;
    }
    
    public String getMessage() {
        return this.message;
    }
    public void setMessage(String val) {
        message = val;
    }
    
    public long getErrorId() {
        return errorId;
    }
    public void setErrorId(long val) {
        errorId = val;
    }
}
