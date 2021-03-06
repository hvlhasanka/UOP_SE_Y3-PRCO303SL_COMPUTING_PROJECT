/**
 * Model: District
 * Database Relation: 'districts'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "districts")
public class District {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "DistrictID", nullable = false)
    private long districtId;

    @Column(name = "District")
    private String district;

    /* Class Methods */
    // Default constructor
    public District() { }

    // Setters and Getters
    public long getDistrictId() {
        return districtId;
    }

    public void setDistrictId(long districtId) {
        this.districtId = districtId;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

}
