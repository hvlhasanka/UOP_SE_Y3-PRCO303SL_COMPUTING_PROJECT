/**
 * Model: Severity
 * Database Relation: 'severities'
 */

package com.computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "severities")
public class Severity {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "severity_id", nullable = false)
    private long severityId;

    @Column(name = "severity")
    private String severity;

    /* Class Methods */
    // Default constructor
    public Severity() { }

    // Setters and Getters
    public long getSeverityId() {
        return severityId;
    }

    public void setSeverityId(long severityId) {
        this.severityId = severityId;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

}
