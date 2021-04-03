/**
 * Service: CustomUserDetailsService
 * Implements: UserDetailsService
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import java.util.Arrays;
import java.util.List;

import com.computingprojecthvlhasanka.ghdserverapp.account.entity.AccountEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginRoleEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

  @Autowired
	private LoginRepository loginRepository;
  
  /**
   * Retrieving user record from the MySQL DB using the email address
   */
  @Override
  public UserDetails loadUserByUsername(String emailAddress) throws UsernameNotFoundException {
    
    List<SimpleGrantedAuthority> roles = null;

    // Retrieving the particular user's record from the MySQL DB using the request emailAddress
    LoginEntity loginEntity = loginRepository.findByEmailAddress(emailAddress);

    // Retrieving the user role by passing user's login record to the loginRole entity
    LoginRoleEntity loginRoleEntity = loginEntity.getLoginRole();

    // Checking whether a user is available
    if (loginEntity != null && loginRoleEntity != null) {
      // Passing the available roles into an array
			roles = Arrays.asList(new SimpleGrantedAuthority(String.valueOf(loginRoleEntity.getRole())));

      // Returning the email address, password, and role
			return new User(loginEntity.getEmailAddress(), loginEntity.getPassword(), roles);
		}

    // Complied if the email address is not found in the MySQL DB
		throw new UsernameNotFoundException("User not found with the email address: " + emailAddress);
  
  }

}
