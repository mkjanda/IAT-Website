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


import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.Basic;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Index;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Transient;
import java.util.Calendar;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "users", indexes
        = @Index(name = "client_user", columnList = "ClientID, user_num", unique = true))
@XmlRootElement(name = "UserInfo")
@XmlAccessorType(XmlAccessType.NONE)
public class User implements java.io.Serializable {
    private static final long serialVersionUID = 1;    
    private long id;
    private String verificationCode, title, firstName, lastName, email;
    private Client client;
    private int userNum;
    private Calendar activationDate;
    private boolean emailVerified;

    public User() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getUserId() {
        return this.id;
    }

    public void setUserId(Long val) {
        this.id = val;
    }

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "ClientID")
    public Client getClient() {
        return this.client;
    }

    public void setClient(Client val) {
        this.client = val;
    }

    @Basic
    @Column(name = "user_num")
    public int getUserNum() {
        return this.userNum;
    }

    public void setUserNum(int val) {
        this.userNum = val;
    }

    @Basic
    @Column(name = "title")
    public String getTitle() {
        return title;
    }
    public void setTitle(String val) {
        this.title = val;
    }

    @Basic
    @Column(name = "fname")
    public String getFName() {
        return firstName;
    }
    public void setFName(String val) {
        firstName = val;
    }

    @Basic
    @Column(name = "lname")
    public String getLName() {
        return lastName;
    }
    public void setLName(String val) {
        lastName = val;
    }

    @Transient
    public String getFullName() {
        return this.title + " " + this.firstName + " " + this.lastName;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email.toLowerCase();
    }
    public void setEmail(String val) {
        this.email = val.toLowerCase();
    }

    @Temporal(value = TemporalType.TIMESTAMP)
    @Column(name = "activation_date")
    public Calendar getActivationDate() {
        return this.activationDate;
    }

    public void setActivationDate(Calendar val) {
        this.activationDate = val;
    }

    @Basic
    @Column(name = "verification_code")
    public String getVerificationCode() {
        return this.verificationCode;
    }

    public void setVerificationCode(String val) {
        this.verificationCode = val;
    }

    @Basic
    @Column(name = "email_verified")
    public boolean isEMailVerified() {
        return this.emailVerified;
    }

    public void setEMailVerified(boolean val) {
        this.emailVerified = val;
    }
}
