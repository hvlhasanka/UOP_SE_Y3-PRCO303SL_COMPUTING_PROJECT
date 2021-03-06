/**
 * Model: Account
 * Database Relation: 'accounts'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "accounts")
public class Account {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    private long accountId;

    @Column(name = "npNamePrefixID")
    private int npNamePrefixId;
    @Column(name = "FirstName")
    private String firstName;
    @Column(name = "MiddleName")
    private String middleName;
    @Column(name = "LastName")
    private String lastName;
    @Column(name = "atAccountTypeID")
    private int atAccountTypeId;
    @Column(name = "LastEditDateTime")
    private String lastEditDateTime;
    @Column(name = "CreatedDateTime")
    private String createdDateTime;

    /* Class Methods */
    // Default constructor
    public Account() { }

    // Setters and Getters
    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }

    public int getNpNamePrefixId() {
        return npNamePrefixId;
    }

    public void setNpNamePrefixId(int npNamePrefixId) {
        this.npNamePrefixId = npNamePrefixId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAtAccountTypeId() {
        return atAccountTypeId;
    }

    public void setAtAccountTypeId(int atAccountTypeId) {
        this.atAccountTypeId = atAccountTypeId;
    }

    public String getLastEditDateTime() {
        return lastEditDateTime;
    }

    public void setLastEditDateTime(String lastEditDateTime) {
        this.lastEditDateTime = lastEditDateTime;
    }

    public String getCreatedDateTime() {
        return createdDateTime;
    }

    public void setCreatedDateTime(String createdDateTime) {
        this.createdDateTime = createdDateTime;
    }

}
