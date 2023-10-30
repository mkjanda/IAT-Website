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

import net.iatsoftware.website.pojos.EmailParameters;

public interface MailService {
    void sendEmail(EmailParameters params) throws jakarta.mail.MessagingException;
}
