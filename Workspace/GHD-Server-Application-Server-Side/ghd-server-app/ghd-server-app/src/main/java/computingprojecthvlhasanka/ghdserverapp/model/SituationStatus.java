/**
 * Model: SituationStatus
 * Database Relation: 'situation_statuses'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "situation_statuses")
public class SituationStatus {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "situation_status_id", nullable = false)
    private long statusId;

    @Column(name = "situation_status")
    private String status;

    /* Class Methods */
    // Default constructor
    public SituationStatus() { }

    // Setters and Getters
    public long getStatusId() {
        return statusId;
    }

    public void setStatusId(long statusId) {
        this.statusId = statusId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
