/**
 * Model: AccountPhoneNumber
 * Database Relation: 'accountPhoneNumbers'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "account_phone_numbers")
public class AccountPhoneNumber implements Serializable {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "a_account_id", nullable = false)
    private long aAccountId;
    @Id
    @Column(name = "phone_number", nullable = false)
    private int phoneNumber;

    /* Class Methods */
    // Default constructor
    public AccountPhoneNumber() { }

    // Setters and Getters
    public long getAAccountId() {
        return aAccountId;
    }

    public void setAAccountId(long aAccountId) {
        this.aAccountId = aAccountId;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}
