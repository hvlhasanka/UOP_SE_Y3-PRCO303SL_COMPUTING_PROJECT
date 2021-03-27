/**
 * Model: UnregisteredPublicUser
 * Database Relation: 'unregisteredpublicusers'
 */

package com.computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "unregisteredpublicusers")
public class UnregisteredPublicUser {

//    /* Class Attributes */
//    // Declaring private class attributes (variables)
   @Id
   @Column(name = "UnregisteredUserId", nullable = false)
   private long unregisteredUserId;
//
//    private long aAccountId;
//    @Column(name = "NIC")
//    private String nic;
//    @Column(name = "PassportNo")
//    private String passportNo;
//    @Column(name = "StreetAddress")
//    private String streetAddress;
//
//    private long cCityID;
//
//    private long pcPostalCodeID;
//
//    private long dDistrictID;
//
//    private long agAgeGroupID;
//
//    private long gGenderID;
//
//    /* Class Methods */
//    // Default constructor
//    public UnregisteredPublicUser() { }
//
//    // Setters and Getters
//    public long getUnregisteredUserId() {
//        return unregisteredUserId;
//    }
//
//    public void setUnregisteredUserId(long unregisteredUserId) {
//        this.unregisteredUserId = unregisteredUserId;
//    }
//
//    public long getAAccountId() {
//        return aAccountId;
//    }
//
//    public void setAAccountId(long aAccountId) {
//        this.aAccountId = aAccountId;
//    }
//
//    public String getNic() {
//        return nic;
//    }
//
//    public void setNic(String nic) {
//        this.nic = nic;
//    }
//
//    public String getPassportNo() {
//        return passportNo;
//    }
//
//    public void setPassportNo(String passportNo) {
//        this.passportNo = passportNo;
//    }
//
//    public String getStreetAddress() {
//        return streetAddress;
//    }
//
//    public void setStreetAddress(String streetAddress) {
//        this.streetAddress = streetAddress;
//    }
//
//    public long getCCityID() {
//        return cCityID;
//    }
//
//    public void setCCityID(long cCityID) {
//        this.cCityID = cCityID;
//    }
//
//    public long getPCPostalCodeID() {
//        return pcPostalCodeID;
//    }
//
//    public void setPCPostalCodeID(long pcPostalCodeID) {
//        this.pcPostalCodeID = pcPostalCodeID;
//    }
//
//    public long getDDistrictID() {
//        return dDistrictID;
//    }
//
//    public void setDDistrictID(long dDistrictID) {
//        this.dDistrictID = dDistrictID;
//    }
//
//    public long getAGAgeGroupID() {
//        return agAgeGroupID;
//    }
//
//    public void setAGAgeGroupID(long agAgeGroupID) {
//        this.agAgeGroupID = agAgeGroupID;
//    }
//
//    public long getGGenderID() {
//        return gGenderID;
//    }
//
//    public void setGGenderID(long gGenderID) {
//        this.gGenderID = gGenderID;
//    }

}
