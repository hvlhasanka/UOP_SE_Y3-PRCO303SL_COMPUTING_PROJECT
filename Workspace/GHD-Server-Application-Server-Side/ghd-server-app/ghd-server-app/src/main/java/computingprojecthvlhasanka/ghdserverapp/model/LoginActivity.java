/**
 * Model: LoginActivity
 * Database Relation: 'login_activities'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "login_activities")
public class LoginActivity {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "login_activity_id", nullable = false)
    private long loginActivityId;

    @Column(name = "login_date_time")
    private String loginDateTime;
    @Column(name = "logout_date_time")
    private String logoutDateTime;
    @Column(name = "aa_account_activity_id")
    private long aaAccountActivityId;
    @Column(name = "l_login_id")
    private long lLoginId;

    /* Class Methods */
    // Default constructor
    public LoginActivity() { }

    // Setters and Getters
    public long getLoginActivityId() {
        return loginActivityId;
    }

    public void setLoginActivityId(long loginActivityId) {
        this.loginActivityId = loginActivityId;
    }

    public String getLoginDateTime() {
        return loginDateTime;
    }

    public void setLoginDateTime(String loginDateTime) {
        this.loginDateTime = loginDateTime;
    }

    public String getLogoutDateTime() {
        return logoutDateTime;
    }

    public void setLogoutDateTime(String logoutDateTime) {
        this.logoutDateTime = logoutDateTime;
    }

    public long getAaAccountActivityId() {
        return aaAccountActivityId;
    }

    public void setAaAccountActivityId(long aaAccountActivityId) {
        this.aaAccountActivityId = aaAccountActivityId;
    }

    public long getlLoginId() {
        return lLoginId;
    }

    public void setlLoginId(long lLoginId) {
        this.lLoginId = lLoginId;
    }

}
