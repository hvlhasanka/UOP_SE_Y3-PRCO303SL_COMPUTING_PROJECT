/**
 * Model: PostalCode
 * Database Relation: 'postalcodes'
 */

package com.computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "postalcodes")
public class PostalCode {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "PostalCodeID", nullable = false)
    private long postalCodeId;

    @Column(name = "PostalCode")
    private String postalCode;

    /* Class Methods */
    // Default constructor
    public PostalCode() { }

    // Setters and Getters
    public long getPostalCodeId() {
        return postalCodeId;
    }

    public void setPostalCodeId(long postalCodeId) {
        this.postalCodeId = postalCodeId;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

}
