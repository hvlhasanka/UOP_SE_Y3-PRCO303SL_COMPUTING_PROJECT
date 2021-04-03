/**
 * Repository: AccountStatusRepository
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.repository;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEnum;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountStatusRepository extends JpaRepository<AccountStatusEntity, Long> {

  // Defining custom database query to search a record by the accountStatus
  AccountStatusEntity findByAccountStatus(AccountStatusEnum accountStatus);

}
