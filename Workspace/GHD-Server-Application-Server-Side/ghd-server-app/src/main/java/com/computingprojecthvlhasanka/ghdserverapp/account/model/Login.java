/**
 * Model: Login
 * Database Relation: 'logins'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.CascadeType;
import javax.persistence.Column;

@Entity
@Table(name = "logins")
public class Login {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "login_id", nullable = false)
    private long loginId;

    @Column(name = "email_address")
    private String emailAddress;
    @Column(name = "password_hash")
    private String passwordHash;
    @Column(name = "as_account_status_id")
    private long asAccountStatusId;

    @OneToOne(fetch = FetchType.LAZY,
    cascade = CascadeType.ALL,
    mappedBy = "login")
    private Account account;

    /* Class Methods */
    // Default constructor
    public Login() { }

    // Setters and Getters
    public long getLoginId() {
        return loginId;
    }

    public void setLoginId(long loginId) {
        this.loginId = loginId;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public long getAsAccountStatusId() {
        return asAccountStatusId;
    }

    public void setAsAccountStatusId(long asAccountStatusId) {
        this.asAccountStatusId = asAccountStatusId;
    }

}
