/**
 * Model: AccountActivity
 * Database Relation: 'account_activities'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "account_activities")
public class AccountActivity {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "account_activity_id", nullable = false)
    private long accountActivityId;

    @Column(name = "account_activity")
    private String accountActivity;

    /* Class Methods */
    // Default constructor
    public AccountActivity() { }

    // Setters and Getters
    public long getAccountActivityId() {
        return accountActivityId;
    }

    public void setAccountActivityId(long accountActivityId) {
        this.accountActivityId = accountActivityId;
    }

    public String getAccountActivity() {
        return accountActivity;
    }

    public void setAccountActivity(String accountActivity) {
        this.accountActivity = accountActivity;
    }

}
