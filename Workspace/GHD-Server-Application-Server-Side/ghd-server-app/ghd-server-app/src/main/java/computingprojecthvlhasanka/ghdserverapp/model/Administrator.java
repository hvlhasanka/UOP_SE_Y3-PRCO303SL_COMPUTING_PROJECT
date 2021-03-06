/**
 * Model: Administrator
 * Database Relation: 'administrators'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.*;

@Entity
@Table(name = "administrators")
public class Administrator {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "AdminID", nullable = false)
    private long adminId;
    @Id
    @Column(name = "aAccountID", nullable = false)
    private long aAccountId;

    @OneToOne(targetEntity = Administrator.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "aRegisteredByAdminID", referencedColumnName = "AdminID")
    private long aRegisteredByAdminId;

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

    public long getARegisteredByAdminId() {
        return aRegisteredByAdminId;
    }

    public void setARegisteredByAdminId(long aRegisteredByAdminId) {
        this.aRegisteredByAdminId = aRegisteredByAdminId;
    }

}
