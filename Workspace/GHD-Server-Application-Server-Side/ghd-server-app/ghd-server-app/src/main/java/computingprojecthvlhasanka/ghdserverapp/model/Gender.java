/**
 * Model: Gender
 * Database Relation: 'genders'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "genders")
public class Gender {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "GenderID", nullable = false)
    private long genderId;

    @Column(name = "Gender")
    private String gender;

    /* Class Methods */
    // Default constructor
    public Gender() { }

    // Setters and Getters
    public long getGenderId() {
        return genderId;
    }

    public void setGenderId(long genderId) {
        this.genderId = genderId;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

}
