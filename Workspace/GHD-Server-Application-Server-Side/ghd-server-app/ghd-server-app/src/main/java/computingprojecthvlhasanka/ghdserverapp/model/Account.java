/**
 * Model: Account
 * Database Relation: 'accounts'
 */

package computingprojecthvlhasanka.ghdserverapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "accounts")
public class Account {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    @Id
    @Column(name = "account_id", nullable = false)
    private long accountId;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "np_name_prefix_id", referencedColumnName = "name_prefix_id")
    private NamePrefix namePrefix;
    @Column(name = "first_name")
    private String firstName;
//    @Column(name = "MiddleName")
//    private String middleName;
//    @Column(name = "LastName")
//    private String lastName;
//    @Column(name = "atAccountTypeID")
//    private long atAccountTypeId;
//    @Column(name = "LastEditDateTime")
//    private String lastEditDateTime;
//    @Column(name = "CreatedDateTime")
//    private String createdDateTime;

    /* Class Methods */
    // Default constructor


    public Account() {
    }

    public Account(long accountId, NamePrefix namePrefix, String firstName) {
        this.accountId = accountId;
        this.namePrefix = namePrefix;
        this.firstName = firstName;
    }

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }

    public NamePrefix getNamePrefix() {
        return namePrefix;
    }

    public void setNamePrefix(NamePrefix namePrefix) {
        this.namePrefix = namePrefix;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
//
//    public String getMiddleName() {
//        return middleName;
//    }
//
//    public void setMiddleName(String middleName) {
//        this.middleName = middleName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public long getAtAccountTypeId() {
//        return atAccountTypeId;
//    }
//
//    public void setAtAccountTypeId(long atAccountTypeId) {
//        this.atAccountTypeId = atAccountTypeId;
//    }
//
//    public String getLastEditDateTime() {
//        return lastEditDateTime;
//    }
//
//    public void setLastEditDateTime(String lastEditDateTime) {
//        this.lastEditDateTime = lastEditDateTime;
//    }
//
//    public String getCreatedDateTime() {
//        return createdDateTime;
//    }
//
//    public void setCreatedDateTime(String createdDateTime) {
//        this.createdDateTime = createdDateTime;
//    }

}
