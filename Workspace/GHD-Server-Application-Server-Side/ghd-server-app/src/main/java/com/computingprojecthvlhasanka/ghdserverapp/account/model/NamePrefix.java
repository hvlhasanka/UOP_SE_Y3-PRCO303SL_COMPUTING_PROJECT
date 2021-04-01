/**
 * Model: NamePrefix
 * Database Relation: 'namePrefixes'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "name_prefixes")
public class NamePrefix {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "name_prefix_id", nullable = false)
    private long namePrefixId;

    @Column(name = "name_prefix")
    private String namePrefix;

    /* Class Methods */
    // Default constructor
    public NamePrefix() { }

    // Setters and Getters
    public long getNamePrefixId() {
        return namePrefixId;
    }

    public void setNamePrefixId(long namePrefixId) {
        this.namePrefixId = namePrefixId;
    }

    public String getNamePrefix() {
        return namePrefix;
    }

    public void setNamePrefix(String namePrefix) {
        this.namePrefix = namePrefix;
    }

}
