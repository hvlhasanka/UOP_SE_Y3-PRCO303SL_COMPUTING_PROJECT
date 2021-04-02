/**
 * Model: NamePrefixEntity
 * Database Relation: 'name_prefixes'
 */
package com.computingprojecthvlhasanka.ghdserverapp.account.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "name_prefixes")
public class NamePrefixEntity {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "name_prefix_id", nullable = false)
    private long namePrefixId;

    @Enumerated(EnumType.STRING)
    @Column(name = "name_prefix")
    private NamePrefixEnum namePrefix;

    @JsonBackReference
    @OneToOne(fetch = FetchType.EAGER, 
    mappedBy = "namePrefix")
    @PrimaryKeyJoinColumn
    private AccountEntity account;

    /* Class Methods */
    // Default constructor
    public NamePrefixEntity() { }

    // Parameterized constructor
    public NamePrefixEntity(NamePrefixEnum namePrefix, AccountEntity account) {
        this.namePrefix = namePrefix;
        this.account = account;
    }

    // Setters and Getters
    public long getNamePrefixId() {
        return this.namePrefixId;
    }

    public void setNamePrefixId(long namePrefixId) {
        this.namePrefixId = namePrefixId;
    }

    public NamePrefixEnum getNamePrefix() {
        return this.namePrefix;
    }

    public void setNamePrefix(NamePrefixEnum namePrefix) {
        this.namePrefix = namePrefix;
    }

    public AccountEntity getAccount() {
        return this.account;
    }

    public void setAccount(AccountEntity account) {
        this.account = account;
    }

}
