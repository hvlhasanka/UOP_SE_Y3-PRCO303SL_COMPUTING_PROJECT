/**
 * Model: AgeGroup
 * Database Relation: 'agegroups'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "agegroups")
public class AgeGroup {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "AgeGroupID", nullable = false)
    private long ageGroupId;

    @Column(name = "AgeGroup")
    private String ageGroup;

    /* Class Methods */
    // Default constructor
    public AgeGroup() { }

    // Setters and Getters
    public long getAgeGroupId() {
        return ageGroupId;
    }

    public void setAgeGroupId(long ageGroupId) {
        this.ageGroupId = ageGroupId;
    }

    public String getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
    }

}
