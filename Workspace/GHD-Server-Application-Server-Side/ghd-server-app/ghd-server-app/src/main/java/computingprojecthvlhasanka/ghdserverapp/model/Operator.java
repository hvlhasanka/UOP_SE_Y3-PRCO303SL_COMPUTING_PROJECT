/**
 * Model: Operator
 * Database Relation: 'operator'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.*;

@Entity
@Table(name = "operators")
public class Operator {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "OperatorID", nullable = false)
    private long operatorId;
    @Id
    @OneToOne(targetEntity = Account.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "aAccountID", referencedColumnName = "AccountID")
    private long aAccountId;

    @OneToOne(targetEntity = Administrator.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "aRegisteredByAdminID", referencedColumnName = "AdminID")
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
