/**
 * Repository: LoginRoleRepository
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.repository;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRoleRepository extends JpaRepository<LoginRoleEntity, Long> {

}
