/**
 * Model: ColourCode
 * Database Relation: 'colour_codes'
 */

package com.computingprojecthvlhasanka.ghdserverapp.account.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "colour_codes")
public class ColourCode {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "colour_code_id", nullable = false)
    private long colourCodeId;

    @Column(name = "colour_code")
    private String colourCode;

    /* Class Methods */
    // Default constructor
    public ColourCode() { }

    // Setters and Getters
    public long getColourCodeId() {
        return colourCodeId;
    }

    public void setColourCodeId(long colourCodeId) {
        this.colourCodeId = colourCodeId;
    }

    public String getColourCode() {
        return colourCode;
    }

    public void setColourCode(String colourCode) {
        this.colourCode = colourCode;
    }

}
