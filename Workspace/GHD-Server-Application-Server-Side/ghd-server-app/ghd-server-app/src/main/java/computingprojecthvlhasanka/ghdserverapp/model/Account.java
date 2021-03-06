/**
 * Model: Account
 * Database Relation: 'accounts'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.*;

@Entity
@Table(name = "accounts")
public class Account {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "AccountId", nullable = false)
    private long accountId;

    @OneToOne(targetEntity = NamePrefix.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "npNamePrefixID", referencedColumnName = "NamePrefixID")
    private long npNamePrefixId;
    @Column(name = "FirstName")
    private String firstName;
    @Column(name = "MiddleName")
    private String middleName;
    @Column(name = "LastName")
    private String lastName;
    @OneToOne(targetEntity = AccountType.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "atAccountTypeId", referencedColumnName = "AccountTypeID")
    private long atAccountTypeId;
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

    public long getNpNamePrefixId() {
        return npNamePrefixId;
    }

    public void setNpNamePrefixId(long npNamePrefixId) {
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

    public long getAtAccountTypeId() {
        return atAccountTypeId;
    }

    public void setAtAccountTypeId(long atAccountTypeId) {
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
