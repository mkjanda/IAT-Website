/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.entities;


import net.iatsoftware.website.forms.RequestSoftwareForm;
import net.iatsoftware.website.pojos.StartingResources;
import net.iatsoftware.website.services.AppContext;

import java.util.Calendar;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

@Entity
@Table(name = "clients", indexes = @Index(name = "clients_product_key", columnList = "product_key"))
public class Client implements java.io.Serializable {

    private static final long serialVersionUID = 1;
    private long id;
    private String productKey, contactFName, contactLName, phone, city, province, country, organization, email, address1, address2;
    private String organizationId = null, postalCode, productUse, downloadPassword;
    private int activationsConsumed, administrations, downloadsConsumed, numIATsAlotted, diskAlottmentMB;
    private Calendar registrationDate, oauthAccessExpiration;
    private boolean frozen, deleted, isolateUsers, killFiled = false;
    private int activationsRemaining, administrationsRemaining, downloadsRemaining;
    private int invalidSaveFiles = 0;
   
    public Client() {
    }
    
    public Client(String productKey, String downloadPassword, RequestSoftwareForm f) {
        StartingResources startingResources = AppContext.getContext().getBean(StartingResources.class);
        this.activationsRemaining = startingResources.getActivations();
        this.administrationsRemaining = startingResources.getAdministrations();
        this.downloadsRemaining = startingResources.getDownloads();
        this.numIATsAlotted = startingResources.getIats();
        this.diskAlottmentMB = startingResources.getDiskSpace();
        this.productKey = productKey;
        this.contactFName = f.getFirstName();
        this.contactLName = f.getLastName();
        this.phone = "";
        this.city = "";
        this.province = "";
        this.country = "";
        this.organization = "";
        this.email = f.getEmail().toLowerCase();
        this.address1 = "";
        this.address2 = "";
        this.postalCode = "";
        this.productUse = f.getUse();
        this.activationsConsumed = 0;
        this.administrations = 0;
        this.registrationDate = Calendar.getInstance();
        this.oauthAccessExpiration = Calendar.getInstance();
        this.frozen = false;
        this.deleted = false;
        this.downloadPassword = downloadPassword;
        this.downloadsConsumed = 0;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ClientID")
    public long getClientId() {
        return this.id;
    }

    public void setClientId(long val) {
        this.id = val;
    }

    @Basic
    @Column(name = "product_key")
    public String getProductKey() {
        return this.productKey;
    }

    public void setProductKey(String val) {
        this.productKey = val;
    }

    @Basic
    @Column(name = "activations_remaining")
    public Integer getActivationsRemaining() {
        if (this.activationsRemaining == -1)
            return null;
        return this.activationsRemaining;
    }

    public void setActivationsRemaining(Integer val) {
        if (val == null)
            this.activationsRemaining = -1;
        else
            this.activationsRemaining = val;
    }

    @Basic
    @Column(name = "activations_consumed")
    public int getActivationsConsumed() {
        return this.activationsConsumed;
    }

    public void setActivationsConsumed(int val) {
        this.activationsConsumed = val;
    }

    @Basic
    @Column(name = "contact_fname")
    public String getContactFName() {
        return this.contactFName;
    }

    public void setContactFName(String val) {
        this.contactFName = val;
    }

    @Basic
    @Column(name = "contact_lname")
    public String getContactLName() {
        return this.contactLName;
    }

    public void setContactLName(String val) {
        this.contactLName = val;
    }

    @Basic
    @Column(name = "organization")
    public String getOrganization() {
        return this.organization;
    }

    public void setOrganization(String val) {
        this.organization = val;
    }

    @Basic
    @Column(name = "email", unique=true)
    public String getEmail() {
        return this.email.toLowerCase();
    }

    public void setEmail(String val) {
        this.email = val.toLowerCase();
    }

    @Basic
    @Column(name = "organization_id", nullable=true)
    public String getOrganizationId() {
        return organizationId;
    }
    public void setOrganizationId(String val) {
        organizationId = val;
    }
    
    @Basic
    @Column(name = "phone")
    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String val) {
        this.phone = val;
    }

    @Basic
    @Column(name = "streetaddress1")
    public String getAddress1() {
        return this.address1;
    }

    public void setAddress1(String val) {
        this.address1 = val;
    }

    @Basic
    @Column(name = "streetaddress2")
    public String getAddress2() {
        return this.address2;
    }

    public void setAddress2(String val) {
        this.address2 = val;
    }

    @Basic
    @Column(name = "city")
    public String getCity() {
        return this.city;
    }

    public void setCity(String val) {
        this.city = val;
    }

    @Basic
    @Column(name = "postalcode")
    public String getPostalCode() {
        return this.postalCode;
    }

    public void setPostalCode(String val) {
        this.postalCode = val;
    }

    @Basic
    @Column(name = "province")
    public String getProvince() {
        return this.province;
    }

    public void setProvince(String val) {
        this.province = val;
    }

    @Basic
    @Column(name = "country")
    public String getCountry() {
        return this.country;
    }

    public void setCountry(String val) {
        this.country = val;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "registration_date")
    public Calendar getRegistrationDate() {
        return this.registrationDate;
    }

    public void setRegistrationDate(Calendar val) {
        this.registrationDate = val;
    }

    @Basic
    @Column(name = "disk_alottment_mb")
    public Integer getDiskAlottmentMB() {
        if (this.diskAlottmentMB == -1)
            return null;
        return this.diskAlottmentMB;
    }

    public void setDiskAlottmentMB(Integer val) {
        if (val == null)
            this.diskAlottmentMB = -1;
        else
            this.diskAlottmentMB = val;
    }

    @Basic
    @Column(name = "num_iats_alotted")
    public Integer getNumIATsAlotted() {
        if (this.numIATsAlotted == -1)
            return null;
        return this.numIATsAlotted;
    }

    public void setNumIATsAlotted(Integer val) {
        if (val == null)
            this.numIATsAlotted = -1;
        else
            this.numIATsAlotted = val;
    }

    @Basic
    @Column(name = "administrations")
    public int getNumAdministrations() {
        return this.administrations;
    }

    public void setNumAdministrations(int val) {
        this.administrations = val;
    }

    @Basic
    @Column(name = "administrations_remaining")
    public Integer getAdministrationsRemaining() {
        if (this.administrationsRemaining == -1)
            return null;
        return this.administrationsRemaining;
    }

    public void setAdministrationsRemaining(Integer val) {
        if (val == null)
            this.administrationsRemaining = -1;
        else
            this.administrationsRemaining = val;
    }

    @Basic
    @Column(name="invalid_save_files")
    public int getInvalidSaveFiles() {
        return invalidSaveFiles;
    }
    public void setInvalidSaveFiles(int val) {
        invalidSaveFiles = val;
    }
    
    @Basic
    @Column(name = "frozen")
    public boolean isFrozen() {
        return this.frozen;
    }

    public void setFrozen(boolean val) {
        this.frozen = val;
    }

    @Basic
    @Column(name = "deleted")
    public boolean isDeleted() {
        return this.deleted;
    }
    public void setDeleted(boolean val) {
        this.deleted = val;
    }
    
    @Basic
    @Column(name = "isolate_users")
    public boolean isIsolateUsers() {
        return isolateUsers;
    }
    public void setIsolateUsers(boolean val) {
        isolateUsers = val;
    }
    
    @Basic
    @Column(name="product_use")
    public String getProductUse() {
        return this.productUse;
    }
    public void setProductUse(String val) {
        this.productUse = val;
    }
    
    @Basic
    @Column(name="download_password")
    public String getDownloadPassword() {
        return this.downloadPassword;
    }
    public void setDownloadPassword(String val) {
        this.downloadPassword = val;
    }
    
    @Basic
    @Column(name="downloads_remaining")
    public Integer getDownloadsRemaining() {
        return this.downloadsRemaining;
    }
    public void setDownloadsRemaining(Integer val) {
        this.downloadsRemaining = val;
    }
    
    @Basic
    @Column(name="downloads_consumed")
    public int getDownloadsConsumed() {
        return this.downloadsConsumed;
    }
    public void setDownloadsConsumed(Integer val) {
        this.downloadsConsumed = val;
    }
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="oauth_access_expires")
    public Calendar getOauthAccessExpiration() {
        return this.oauthAccessExpiration;
    }
    public void setOauthAccessExpiration(Calendar val) {
        this.oauthAccessExpiration = val;
    }
    
    @Basic
    @Column(name="kill_filed")
    public boolean getKillFiled() {
        return killFiled;
    }
    public void setKillFiled(boolean val) {
        killFiled = val;
    }

    @Transient
    public String getFullName() {
    	return this.contactFName + " " + this.contactLName;
    }
}
