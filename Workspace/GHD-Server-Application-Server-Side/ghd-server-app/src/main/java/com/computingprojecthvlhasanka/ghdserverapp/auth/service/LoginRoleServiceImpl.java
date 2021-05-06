package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEnum;
import com.computingprojecthvlhasanka.ghdserverapp.auth.repository.LoginRoleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginRoleServiceImpl implements LoginRoleService {
  
  @Autowired
  LoginRoleRepository loginRoleRepository;

  /**
   * Retrieving record for the role 
   */
  @Override
  public LoginRoleEntity retrieveByRole(LoginRoleEnum role){
    return loginRoleRepository.findByRole(role);
  }

}
