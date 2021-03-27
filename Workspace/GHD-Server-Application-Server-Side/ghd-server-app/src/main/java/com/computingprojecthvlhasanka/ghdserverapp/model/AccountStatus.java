/**
 * Model: AccountStatus
 * Database Relation: 'account_statuses'
 */

package com.computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "account_statuses")
public class AccountStatus {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "account_status_id", nullable = false)
    private long accountStatusId;

    @Column(name = "account_status")
    private String accountStatus;

    /* Class Methods */
    // Default constructor
    public AccountStatus() { }

    // Setters and Getters
    public long getAccountStatusId() {
        return accountStatusId;
    }

    public void setAccountStatusId(long accountStatusId) {
        this.accountStatusId = accountStatusId;
    }

    public String getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }

}
