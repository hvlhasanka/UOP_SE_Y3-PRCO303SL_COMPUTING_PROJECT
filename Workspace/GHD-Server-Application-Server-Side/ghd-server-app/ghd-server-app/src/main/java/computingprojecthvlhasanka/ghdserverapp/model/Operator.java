/**
 * Model: Operator
 * Database Relation: 'operators'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "operators")
public class Operator {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "operator_id", nullable = false)
    private long operatorId;

    @Column(name = "a_account_id")
    private long aAccountId;

    @Column(name = "a_registered_by_admin_id")
    private long aRegisteredByAdminId;

    /* Class Methods */
    // Default constructor
    public Operator() { }

    // Setters and Getters
    public long getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(long operatorId) {
        this.operatorId = operatorId;
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
