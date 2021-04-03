/**
 * Repository: LoginRoleRepository
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.repository;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEnum;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRoleRepository extends JpaRepository<LoginRoleEntity, Long> {

  // Defining custom database query to search a record by the role
  LoginRoleEntity findByRole(LoginRoleEnum role);

}
