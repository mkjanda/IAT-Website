/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.entities;

/**
 *
 * @author michael
 */


import net.iatsoftware.website.generated.TokenType;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Lob;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Basic;
import javax.persistence.Index;
import javax.persistence.Enumerated;
import javax.persistence.EnumType;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.FetchType;


@Entity
@Table(name = "tests", indexes = {
    @Index(name = "tests", columnList = "client_id, test_name")
})
public class IAT implements java.io.Serializable {
    private static final long serialVersionUID = 1;
    private long id = -1;
    private String testName, URL, oauthClientSecret = null, oauthClientRedirect = null, oauthClientId = null;
    private Boolean oauthSubpathRedirects = null;
    private String aesCode;
    private Client client;
    private TokenType tokenType = TokenType.NONE;
    private String tokenName = "";
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TestID")
    public long getId() {
        return this.id;
    }

    public void setId(long val) {
        this.id = val;
    }

    @Basic
    @Column(name = "test_name")
    public String getTestName() {
        return this.testName;
    }

    public void setTestName(String val) {
        this.testName = val;
    }

    
    @ManyToOne(fetch=FetchType.EAGER, optional=false)
    @JoinColumn(name="client_id", referencedColumnName="ClientID")
    public Client getClient() {
        return this.client;
    }
    public void setClient(Client val) {
        this.client = val;
    }

    @Lob
    @Column(name = "aes_code")
    public String getAESCode() {
        return this.aesCode;
    }

    public void setAESCode(String val) {
        this.aesCode = val;
    }

    @Basic
    @Column(name="url")
    public String getURL() {
        return URL;
    }
    public void setURL(String val) {
        this.URL = val;
    }
    
    @Basic
    @Column(name="oauth_client_redirect", nullable=true)
    public String getOauthClientRedirect() {
        return this.oauthClientRedirect;
    }
    public void setOauthClientRedirect(String val) {
        this.oauthClientRedirect = val;
    }
    
    @Basic
    @Column(name="oauth_subpath_redirects", nullable=true)
    public Boolean isOauthSubpathRedirects() {
        return this.oauthSubpathRedirects;
    }
    public void setOauthSubpathRedirects(Boolean val) {
        this.oauthSubpathRedirects = val;
    }

    @Basic
    @Column(name="oauth_client_id", nullable=true)
    public String getOauthClientId() {
        return this.oauthClientId;
    }
    public void setOauthClientId(String val) {
        this.oauthClientId = val;
    }
    
    @Basic
    @Column(name="oauth_client_secret", nullable=true)
    public String getOauthClientSecret()
    {
        return this.oauthClientSecret;
    }
    public void setOauthClientSecret(String val) {
        this.oauthClientSecret = val;
    }
    
    @Enumerated(EnumType.STRING)
    @Column(name="token_type")
    public TokenType getTokenType() {
        return this.tokenType;
    }
    public void setTokenType(TokenType val) {
        this.tokenType = val;
    }
    
    @Basic
    @Column(name="token_name")
    public String getTokenName() {
        return this.tokenName;
    }
    public void setTokenName(String val) {
        this.tokenName = val;
    }
}
