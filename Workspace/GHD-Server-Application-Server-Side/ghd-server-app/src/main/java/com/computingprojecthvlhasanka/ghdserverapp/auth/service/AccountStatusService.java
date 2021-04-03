/**
 * Service: AccountStatusService
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import org.springframework.stereotype.Service;

@Service
public interface AccountStatusService {
  
  /**
   * Checking the user's account status
   */
  String checkAccountStatus(String emailAddress);

}
