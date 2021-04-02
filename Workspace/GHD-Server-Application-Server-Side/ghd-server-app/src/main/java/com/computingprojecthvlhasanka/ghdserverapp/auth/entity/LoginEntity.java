/**
 * Entity: Login
 * Database Relation: 'logins'
 */

package com.computingprojecthvlhasanka.ghdserverapp.auth.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.CascadeType;
import javax.persistence.Column;

@Entity
@Table(name = "logins")
public class LoginEntity {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "login_id", nullable = false)
    private long loginId;

    @Column(name = "email_address")
    private String emailAddress;
    @Column(name = "password")
    private String password;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "login_role_id")
    private LoginRoleEntity loginRole;

    /* Class Methods */
    // Default constructor
    public LoginEntity() { }

    // Parameterized constructor
    public LoginEntity(String emailAddress, String password, LoginRoleEntity loginRole) {
        super();
        this.emailAddress = emailAddress;
        this.password = password;
        this.loginRole = loginRole;
    }

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LoginRoleEntity getLoginRole() {
        return this.loginRole;
    }

    public void setLoginRole(LoginRoleEntity loginRole) {
        this.loginRole = loginRole;
    }
    
}
