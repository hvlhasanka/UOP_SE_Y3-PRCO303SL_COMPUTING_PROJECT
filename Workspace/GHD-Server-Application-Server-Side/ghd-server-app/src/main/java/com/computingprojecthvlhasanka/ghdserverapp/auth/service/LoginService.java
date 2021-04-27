/**
 * Service: LoginService
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.model.LoginModel;

public interface LoginService {
  
  /**
   * Inserting a new record into the 'Logins' relation in the MySQL DB
   */
  LoginEntity addLoginRecord(LoginModel user);
  
}
