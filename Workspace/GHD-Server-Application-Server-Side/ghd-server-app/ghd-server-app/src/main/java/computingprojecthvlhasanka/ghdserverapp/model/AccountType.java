/**
 * Model: AccountType
 * Database Relation: 'accountTypes'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "accountTypes")
public class AccountType {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "AccountTypeId", nullable = false)
    private long accountTypeId;

    @Column(name = "AccountType")
    private String accountType;

    /* Class Methods */
    // Default constructor
    public AccountType() { }

    // Setters and Getters
    public long getAccountTypeId() {
        return accountTypeId;
    }

    public void setAccountTypeId(long accountTypeId) {
        this.accountTypeId = accountTypeId;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

}
