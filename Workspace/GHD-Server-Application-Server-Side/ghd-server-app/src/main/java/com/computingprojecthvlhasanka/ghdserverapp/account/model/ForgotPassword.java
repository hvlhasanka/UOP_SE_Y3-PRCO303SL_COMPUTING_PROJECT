/**
 * Model: ForgotPassword
 * Database Relation: 'forgot_passwords'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "forgot_passwords")
public class ForgotPassword {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "recovery_id", nullable = false)
    private long recoveryId;

    @Column(name = "pin_code")
    private String pinCode;
    @Column(name = "created_date_time")
    private String createdDateTime;
    @Column(name = "l_login_id")
    private long lLoginId;

    /* Class Methods */
    // Default constructor
    public ForgotPassword() { }

    // Setters and Getters
    public long getRecoveryId() {
        return recoveryId;
    }

    public void setRecoveryId(long recoveryId) {
        this.recoveryId = recoveryId;
    }

    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    public String getCreatedDateTime() {
        return createdDateTime;
    }

    public void setCreatedDateTime(String createdDateTime) {
        this.createdDateTime = createdDateTime;
    }

    public long getlLoginId() {
        return lLoginId;
    }

    public void setlLoginId(long lLoginId) {
        this.lLoginId = lLoginId;
    }

}
