/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.services;

/**
 *
 * @author michael
 */


public interface ServerErrorService {
    Long storeError(Exception ex);
    void reportError(long errorNum, String email) throws javax.mail.MessagingException;
    void reportError(Exception ex) throws javax.mail.MessagingException;
}
