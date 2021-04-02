/**
 * Entity: AccountStatusEntity
 * Database Relation: 'account_status_entity'
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "account_statuses")
public class AccountStatusEntity {

  /* Class Attributes */
  // Declaring private class attributes (variables)
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "account_status_id", nullable = false)
  private long accountStatusId;

  @Enumerated(EnumType.STRING)
  @Column(name = "account_status")
  private AccountStatusEnum accountStatus;

  @JsonBackReference
  @OneToOne(fetch = FetchType.EAGER, 
  mappedBy = "accountStatus")
  @PrimaryKeyJoinColumn
  private LoginEntity login;

  /* Class Methods */
  // Default constructor
  public AccountStatusEntity() { }

  // Parameterized constructor
  public AccountStatusEntity(long accountStatusId, AccountStatusEnum accountStatus, LoginEntity login) {
    this.accountStatusId = accountStatusId;
    this.accountStatus = accountStatus;
    this.login = login;
  }

  // Setters and Getters
  public long getAccountStatusId() {
    return this.accountStatusId;
  }

  public void setAccountStatusId(long accountStatusId) {
    this.accountStatusId = accountStatusId;
  }

  public AccountStatusEnum getAccountStatus() {
    return this.accountStatus;
  }

  public void setAccountStatus(AccountStatusEnum accountStatus) {
    this.accountStatus = accountStatus;
  }

  public LoginEntity getLogin() {
    return this.login;
  }

  public void setLogin(LoginEntity login) {
    this.login = login;
  }

}
