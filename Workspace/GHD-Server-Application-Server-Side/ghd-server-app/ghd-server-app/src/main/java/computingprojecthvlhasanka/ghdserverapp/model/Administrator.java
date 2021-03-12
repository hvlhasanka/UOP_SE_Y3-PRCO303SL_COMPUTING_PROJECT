/**
 * Model: Administrator
 * Database Relation: 'administrators'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "administrators")
public class Administrator {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "admin_id", nullable = false)
    private long adminId;

    @Column(name = "a_account_id")
    private long aAccountId;

    @Column(name = "a_registered_by_admin_id")
    private long aRegisteredByAccountId;

    /* Class Methods */
    // Default constructor
    public Administrator() { }

    // Setters and Getters
    public long getAdminId() {
        return adminId;
    }

    public void setAdminId(long adminId) {
        this.adminId = adminId;
    }

    public long getAAccountId() {
        return aAccountId;
    }

    public void setAAccountId(long aAccountId) {
        this.aAccountId = aAccountId;
    }

    public long getARegisteredByAccountId() {
        return aRegisteredByAccountId;
    }

    public void setARegisteredByAccountId(long aRegisteredByAccountId) {
        this.aRegisteredByAccountId = aRegisteredByAccountId;
    }

}
