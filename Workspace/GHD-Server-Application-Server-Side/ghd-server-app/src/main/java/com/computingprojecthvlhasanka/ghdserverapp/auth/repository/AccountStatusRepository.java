/**
 * Repository: AccountStatusRepository
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.repository;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountStatusRepository extends JpaRepository<AccountStatusEntity, Long> {

}
