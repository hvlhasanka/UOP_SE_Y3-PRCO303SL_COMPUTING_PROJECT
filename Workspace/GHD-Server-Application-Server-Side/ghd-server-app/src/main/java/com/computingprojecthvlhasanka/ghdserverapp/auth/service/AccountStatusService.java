/**
 * Service: AccountStatusService
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.AccountStatusEnum;

import org.springframework.stereotype.Service;

@Service
public interface AccountStatusService {
  
  /**
   * Checking the user's account status
   */
  String checkAccountStatus(String emailAddress);

  /**
   * Retrieving record for the account status 
   */
  AccountStatusEntity retrieveByAccountStatus(AccountStatusEnum accountStatus);

}
