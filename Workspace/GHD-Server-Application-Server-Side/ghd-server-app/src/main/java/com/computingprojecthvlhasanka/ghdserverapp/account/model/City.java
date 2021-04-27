/**
 * Model: City
 * Database Relation: 'cities'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cities")
public class City {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "CityID", nullable = false)
    private long cityId;

    @Column(name = "City")
    private String city;

    /* Class Methods */
    // Default constructor
    public City() { }

    // Setters and Getters
    public long getCityId() {
        return cityId;
    }

    public void setCityId(long cityId) {
        this.cityId = cityId;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

}
