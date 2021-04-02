/**
 * Model: AccountType
 * Database Relation: 'accountTypes'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "accountTypes")
public class AccountTypeEntity {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "AccountTypeId", nullable = false)
    private long accountTypeId;

    @Enumerated(EnumType.STRING)
    @Column(name = "AccountType")
    private AccountTypeEnum accountType;

    @JsonBackReference
    @OneToOne(fetch = FetchType.EAGER, 
    mappedBy = "accountType")
    @PrimaryKeyJoinColumn
    private AccountEntity account;

    /* Class Methods */
    // Default constructor
    public AccountTypeEntity() { }

    // Setters and Getters
    public long getAccountTypeId() {
        return accountTypeId;
    }

    public void setAccountTypeId(long accountTypeId) {
        this.accountTypeId = accountTypeId;
    }

    public AccountTypeEnum getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountTypeEnum accountType) {
        this.accountType = accountType;
    }

}
