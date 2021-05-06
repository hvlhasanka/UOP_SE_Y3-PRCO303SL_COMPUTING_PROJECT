/**
 * Entity: LoginRoleEntity
 * Database Relation: 'login_roles'
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

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

  /* Class Methods */
  // Default constructor
  public LoginRoleEntity() { }

  // Parameterized constructor
  public LoginRoleEntity(LoginRoleEnum role) {
    this.role = role;
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

}
