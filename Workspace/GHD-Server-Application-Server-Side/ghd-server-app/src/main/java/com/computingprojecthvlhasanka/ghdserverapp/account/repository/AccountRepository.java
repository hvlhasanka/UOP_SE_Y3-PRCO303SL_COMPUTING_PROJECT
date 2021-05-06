package com.computingprojecthvlhasanka.ghdserverapp.account.repository;

import com.computingprojecthvlhasanka.ghdserverapp.account.entity.AccountEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// Enabling CURD database operations for 'Login' relation using JpaRepository
@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Long> {

   // Custom method to find account by 'LastName' field
//    List<Account> findByLastName(String lastName);

}
