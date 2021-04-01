package com.computingprojecthvlhasanka.ghdserverapp.auth.repository;

import com.computingprojecthvlhasanka.ghdserverapp.auth.model.DAOUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<DAOUser, Long> {

  // Defining custom database query to search a record by the username
  DAOUser findByUsername(String username);
}