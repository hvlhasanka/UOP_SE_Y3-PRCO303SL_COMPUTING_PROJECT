/**
 * Model: AccountType
 * Database Relation: 'accountTypes'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

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
