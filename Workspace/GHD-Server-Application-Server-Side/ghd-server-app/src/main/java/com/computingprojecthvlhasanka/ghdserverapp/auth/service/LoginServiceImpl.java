/**
 * Service: LoginServiceImpl
 * Implements: LoginService
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEnum;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEnum;
import com.computingprojecthvlhasanka.ghdserverapp.auth.model.LoginModel;
import com.computingprojecthvlhasanka.ghdserverapp.auth.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {
  
  @Autowired
	private LoginRepository loginRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;
  
  /**
   * Inserting a new record into the 'Logins' relation in the MySQL DB
   */
  @Override
  public LoginEntity addLoginRecord(LoginModel user) {

		LoginEntity newLoginRecord = new LoginEntity();
		newLoginRecord.setEmailAddress(user.getEmailAddress());
		newLoginRecord.setPassword(bcryptEncoder.encode(user.getPassword()));

    LoginRoleEntity newLoginRecordRole = new LoginRoleEntity();
    LoginRoleEnum loginRoleEnum = LoginRoleEnum.valueOf(user.getRole());

    newLoginRecordRole.setRole(loginRoleEnum);

    AccountStatusEntity newLoginRecordAccountStatus = new AccountStatusEntity();
    AccountStatusEnum accountStatusEnum = AccountStatusEnum.valueOf(user.getAccountStatus());

    newLoginRecordAccountStatus.setAccountStatus(accountStatusEnum);
    newLoginRecord.setLoginRole(newLoginRecordRole);
    newLoginRecord.setAccountStatus(newLoginRecordAccountStatus);
    
		return loginRepository.save(newLoginRecord);

	}

}
