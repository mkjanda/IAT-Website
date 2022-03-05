/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.controllers;

/**
 *
 * @author michael
 */
import net.iatsoftware.website.entities.Client;
import net.iatsoftware.website.repositories.RepositoryManager;
import net.iatsoftware.website.services.ServerErrorService;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.net.URLDecoder;
import java.util.Base64;
import java.util.Random;
import javax.inject.Inject;

@Controller
@RequestMapping("/DownloadSoftware")
@PropertySource("classpath:environment.properties")
public class DownloadSoftware {

    private static final Logger logger = LogManager.getLogger();
    @Inject
    RepositoryManager repositoryManager;
    @Inject
    ServerErrorService serverErrorService;

    @Value("${environment.clientSoftwareFilePath}")
    private String clientSoftwareFilePath;

    private Random rand = new Random();
    private Base64.Encoder b64Encoder = Base64.getEncoder();
    
    @RequestMapping(value = "", method = RequestMethod.GET, params = {"password", "clientId"})
    public ResponseEntity<Resource> download(@RequestParam(name = "password", required = true) String password,
            @RequestParam(name = "clientId", required = true) long clientId) {
        HttpHeaders headers = new HttpHeaders();
        try {
            String decodedPassword = URLDecoder.decode(password, "UTF-8");
            Client c = repositoryManager.getClient(clientId);
            headers.setLocation(ServletUriComponentsBuilder.fromCurrentRequest().build().toUri());
            if (c == null) {
                return new ResponseEntity<>((Resource) null, headers, HttpStatus.NO_CONTENT);
            } else if (!c.getDownloadPassword().equals(decodedPassword)) {
                return new ResponseEntity<>((Resource) null, headers, HttpStatus.NO_CONTENT);
            }
            byte []downloadPass = new byte[15];
            rand.nextBytes(downloadPass);
            c.setDownloadPassword(b64Encoder.encodeToString(downloadPass));
            repositoryManager.update(c);
            headers.set(HttpHeaders.CONTENT_TYPE, "application/octet-stream");
            headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"IAT Design.zip\"");
            return new ResponseEntity<>(new FileSystemResource(new File(clientSoftwareFilePath)), headers,
                    HttpStatus.OK);
        } catch (Exception ex) {
            logger.error("Error reading software file for download", ex);
            headers.set("Error-Id", serverErrorService.storeError(ex).toString());
            return new ResponseEntity<>((Resource) null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
