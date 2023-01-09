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



public class StartingResources {
    private int activations;
    private int administrations;
    private int downloads;
    private int iats;
    private int diskSpace;
    
    public int getActivations() {
        return this.activations;
    }
    
    public void setActivations(int activations) {
        this.activations = activations;
    }
    
    public int getDownloads() {
        return this.downloads;
    }
    public void setDownloads(int val) {
        this.downloads = val;
    }
    public int getAdministrations() {
        return this.administrations;
    }
    public void setAdministrations(int val) {
        this.administrations = val;
    }
    public void setIats(int val) {
        this.iats = val;
    }
    public int getIats() {
        return this.iats;
    }
    public int getDiskSpace() {
        return this.diskSpace;
    }
    public void setDiskSpace(int val) {
        this.diskSpace = val;
    }
    
}
