/**
 * Entity: LoginRoleEntity
 * Database Relation: 'login_roles'
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
@Table(name = "login_roles")
public class LoginRoleEntity {

  /* Class Attributes */
  // Declaring private class attributes (variables)
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "role_id", nullable = false)
  private long roleId;

  @Enumerated(EnumType.STRING)
  @Column(name = "role")
  private LoginRoleEnum role;

  @JsonBackReference
  @OneToOne(fetch = FetchType.EAGER, 
  mappedBy = "loginRole")
  @PrimaryKeyJoinColumn
  private LoginEntity login;

  /* Class Methods */
  // Default constructor
  public LoginRoleEntity() { }

  // Parameterized constructor
  public LoginRoleEntity(LoginRoleEnum role, LoginEntity login) {
    this.role = role;
    this.login = login;
  }

  // Setters and Getters
  public long getRoleId() {
    return this.roleId;
  }

  public void setRoleId(long roleId) {
    this.roleId = roleId;
  }

  public LoginRoleEnum getRole() {
    return this.role;
  }

  public void setRole(LoginRoleEnum role) {
    this.role = role;
  }

  public LoginEntity getLogin() {
    return this.login;
  }

  public void setLogin(LoginEntity login) {
    this.login = login;
  }

}
