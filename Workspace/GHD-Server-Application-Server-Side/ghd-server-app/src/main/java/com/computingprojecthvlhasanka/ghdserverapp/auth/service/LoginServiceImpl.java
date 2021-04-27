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
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {
  
  @Autowired
	private LoginRepository loginRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

  @Autowired
  private AccountStatusServiceImpl accountStatusServiceImpl;

  @Autowired
  private LoginRoleServiceImpl loginRoleServiceImpl;
  
  /**
   * Inserting a new record into the 'Logins' relation in the MySQL DB
   */
  @Override
  public LoginEntity addLoginRecord(LoginModel user){
 
    // Creating a new 'LoginEntity' instance
    LoginEntity newLoginRecord = new LoginEntity();

    // Assigning emailAddress field
    newLoginRecord.setEmailAddress(user.getEmailAddress());

    // Assigning password field
    newLoginRecord.setPassword(bcryptEncoder.encode(user.getPassword()));
    
    // Creating a new 'loginRoleEnum' instance and initialize the enum value of role
    LoginRoleEnum loginRoleEnum = LoginRoleEnum.valueOf(user.getRole());
    // Creating a new 'newLoginRecordRole' instance and initialize a role record by passing the role enum value
    LoginRoleEntity newLoginRecordRole = loginRoleServiceImpl.retrieveByRole(loginRoleEnum);
    
    // Creating a new 'AccountStatusEnum' instance and initialize the enum value of account status
    AccountStatusEnum accountStatusEnum = AccountStatusEnum.valueOf(user.getAccountStatus());
    // Creating a new 'AccountStatusEntity' instance and initialize a accountStatus record by passing the accountStatus enum value
    AccountStatusEntity newLoginRecordAccountStatus = accountStatusServiceImpl.retrieveByAccountStatus(accountStatusEnum);

    // Assigning role to 'newLoginRecord' instance
    newLoginRecord.setLoginRole(newLoginRecordRole);
    // Assigning account status to 'newLoginRecord' instance
    newLoginRecord.setAccountStatus(newLoginRecordAccountStatus);

		try{
      // Inserting a new record into the relevant relations and returning the newly created fields
      return loginRepository.save(newLoginRecord);
    }
    catch(DataIntegrityViolationException emailExists){
      // Checking the exisitance of the passed email address
      throw new BadCredentialsException("Email Address Already Exists", emailExists);
    }

	}

}
