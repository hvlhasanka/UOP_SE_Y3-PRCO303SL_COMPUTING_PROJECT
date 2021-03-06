/**
 * Model: Login
 * Database Relation: 'logins'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "logins")
public class Login {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "LoginId", nullable = false)
    private long loginId;

    @Column(name = "EmailAddress")
    private String emailAddress;
    @Column(name = "PasswordHash")
    private String passwordHash;
    @Column(name = "asAccountStatusID")
    private long asAccountStatusId;
    @Column(name = "aAccountID")
    private long aAccountId;

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

    public long getAAccountId() {
        return aAccountId;
    }

    public void setAAccountId(long aAccountId) {
        this.aAccountId = aAccountId;
    }

}