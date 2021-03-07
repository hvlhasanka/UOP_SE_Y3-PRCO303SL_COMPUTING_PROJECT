/**
 * Model: AccountPhoneNumber
 * Database Relation: 'accountPhoneNumbers'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "accountPhoneNumbers")
public class AccountPhoneNumber implements Serializable {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id

    private long aAccountId;
    @Id
    @Column(name = "PhoneNumber", nullable = false)
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
