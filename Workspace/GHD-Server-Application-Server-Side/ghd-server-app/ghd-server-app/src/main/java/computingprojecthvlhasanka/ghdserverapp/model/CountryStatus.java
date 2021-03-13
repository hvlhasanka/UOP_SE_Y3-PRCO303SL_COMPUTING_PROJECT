/**
 * Model: CountryStatus
 * Database Relation: 'country_statuses'
 */


package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "country_statuses")
public class CountryStatus {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "country_status_id", nullable = false)
    private long statusId;

    @Column(name = "ss_situation_status_id")
    private long sStatusId;
    @Column(name = "s_severity_id")
    private long sSeverityId;
    @Column(name = "cc_colour_code_id")
    private long ccColorCodeId;
    @Column(name = "current_country_status")
    private String currentCountryStatus;
    @Column(name = "o_assigned_by_operator_id")
    private long oAssignedByOperatorId;
    @Column(name = "o_assigned_by_account_id")
    private long oAssignedByAccountId;

    /* Class Methods */
    // Default constructor
    public CountryStatus() { }

    // Setters and Getters
    public long getStatusId() {
        return statusId;
    }

    public void setStatusId(long statusId) {
        this.statusId = statusId;
    }

    public long getSStatusId() {
        return sStatusId;
    }

    public void setSStatusId(long sStatusId) {
        this.sStatusId = sStatusId;
    }

    public long getSSeverityId() {
        return sSeverityId;
    }

    public void setSSeverityId(long sSeverityId) {
        this.sSeverityId = sSeverityId;
    }

    public long getCCColorCodeId() {
        return ccColorCodeId;
    }

    public void setCCColorCodeId(long ccColorCodeId) {
        this.ccColorCodeId = ccColorCodeId;
    }

    public String getCurrentCountryStatus() {
        return currentCountryStatus;
    }

    public void setCurrentCountryStatus(String currentCountryStatus) {
        this.currentCountryStatus = currentCountryStatus;
    }

    public long getOAssignedByOperatorId() {
        return oAssignedByOperatorId;
    }

    public void setOAssignedByOperatorId(long oAssignedByOperatorId) {
        this.oAssignedByOperatorId = oAssignedByOperatorId;
    }

    public long getOAssignedByAccountId() {
        return oAssignedByAccountId;
    }

    public void setOAssignedByAccountId(long oAssignedByAccountId) {
        this.oAssignedByAccountId = oAssignedByAccountId;
    }

}
