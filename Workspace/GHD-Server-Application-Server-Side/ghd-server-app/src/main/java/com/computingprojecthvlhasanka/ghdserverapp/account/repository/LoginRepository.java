package com.computingprojecthvlhasanka.ghdserverapp.account.repository;

import com.computingprojecthvlhasanka.ghdserverapp.account.model.Login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Enabling CURD database operations for 'Login' relation using JpaRepository
@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {

  // Custom method to find account by 'EmailAddress' field
  Login findByEmailAddress(String emailAddress);

}
