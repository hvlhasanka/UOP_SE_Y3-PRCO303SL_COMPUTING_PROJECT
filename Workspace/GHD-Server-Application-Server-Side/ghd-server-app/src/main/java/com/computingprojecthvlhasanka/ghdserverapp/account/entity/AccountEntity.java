/**
 * Model: Account
 * Database Relation: 'accounts'
 */
package com.computingprojecthvlhasanka.ghdserverapp.account.entity;

import javax.persistence.*;

@Entity
@Table(name = "accounts")
public class AccountEntity {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id", nullable = false)
    private long accountId;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "np_name_prefix_id")
    private NamePrefixEntity namePrefix;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "MiddleName")
    private String middleName;

    @Column(name = "LastName")
    private String lastName;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "at_account_type_id")
    private AccountTypeEntity accountType;

    @Column(name = "LastEditDateTime")
    private String lastEditDateTime;

    @Column(name = "CreatedDateTime")
    private String createdDateTime;

    /* Class Methods */
    // Default constructor
    public AccountEntity() { }

    // Parameterized constructor
    public AccountEntity(
        NamePrefixEntity namePrefix, 
        String firstName, 
        String middleName, 
        String lastName, 
        AccountTypeEntity accountType, 
        String lastEditDateTime, 
        String createdDateTime) 
    {
        this.namePrefix = namePrefix;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.accountType = accountType;
        this.lastEditDateTime = lastEditDateTime;
        this.createdDateTime = createdDateTime;
    }

    // Setters and Getters
    public NamePrefixEntity getNamePrefix() {
        return this.namePrefix;
    }

    public void setNamePrefix(NamePrefixEntity namePrefix) {
        this.namePrefix = namePrefix;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return this.middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public AccountTypeEntity getAccountType() {
        return this.accountType;
    }

    public void setAccountType(AccountTypeEntity accountType) {
        this.accountType = accountType;
    }

    public String getLastEditDateTime() {
        return this.lastEditDateTime;
    }

    public void setLastEditDateTime(String lastEditDateTime) {
        this.lastEditDateTime = lastEditDateTime;
    }

    public String getCreatedDateTime() {
        return this.createdDateTime;
    }

    public void setCreatedDateTime(String createdDateTime) {
        this.createdDateTime = createdDateTime;
    }

}
