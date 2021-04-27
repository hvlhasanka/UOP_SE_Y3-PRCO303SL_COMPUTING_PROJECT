/**
 * Service: AccountStatusServiceImpl
 * Implements: AccountStatusService
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEnum;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.repository.AccountStatusRepository;
import com.computingprojecthvlhasanka.ghdserverapp.auth.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountStatusServiceImpl implements AccountStatusService {

  @Autowired
  private LoginRepository loginRepository;

  @Autowired
  private AccountStatusRepository accountStatusEntity;

  /**
   * Checking the user's account status
   */
  @Override
  public String checkAccountStatus(String emailAddress) {
    String accountStatus = null;

    // Retrieving the particular user's record from the MySQL DB using the request emailAddress
    LoginEntity loginEntity = loginRepository.findByEmailAddress(emailAddress);

    // Retrieving the user account status by passing user's login record to the accountStatus entity
    AccountStatusEntity accountStatusEntity = loginEntity.getAccountStatus();

    if(String.valueOf(accountStatusEntity.getAccountStatus()) == "DISABLED"){
      accountStatus = "DISABLED";
    }
    else{
      accountStatus = "ENABLED";
    }

    return accountStatus;
  }

  /**
   * Retrieving record for the account status 
   */
  @Override
  public AccountStatusEntity retrieveByAccountStatus(AccountStatusEnum accountStatus){
    return accountStatusEntity.findByAccountStatus(accountStatus);
  }

}
