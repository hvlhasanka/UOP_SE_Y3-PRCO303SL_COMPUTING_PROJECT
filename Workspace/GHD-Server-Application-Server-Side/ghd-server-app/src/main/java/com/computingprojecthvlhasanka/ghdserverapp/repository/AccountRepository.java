package com.computingprojecthvlhasanka.ghdserverapp.repository;

import com.computingprojecthvlhasanka.ghdserverapp.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// Enabling CURD database operations for 'Login' relation using JpaRepository
@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    // Custom method to find account by 'LastName' field
   // List<Account> findByLastName(String lastName);

}
