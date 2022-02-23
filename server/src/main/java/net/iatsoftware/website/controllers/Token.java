/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Base64;
import java.util.Random;

@Controller
@RequestMapping("/token")
public class Token {
    
    private static final Random random = new Random();
    private static final Base64.Encoder b64Encoder = Base64.getEncoder();
    
    @RequestMapping(value="", method=RequestMethod.GET)
    @ResponseBody String getToken() {
        byte[] data = new byte[16];
        random.nextBytes(data);
        String token = b64Encoder.encodeToString(data) + Long.toString(System.currentTimeMillis());
        return token;
    }
}
