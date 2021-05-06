package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEnum;

import org.springframework.stereotype.Service;

@Service
public interface LoginRoleService {
  
  /**
   * Retrieving record for the role 
   */
  LoginRoleEntity retrieveByRole(LoginRoleEnum role);

}
