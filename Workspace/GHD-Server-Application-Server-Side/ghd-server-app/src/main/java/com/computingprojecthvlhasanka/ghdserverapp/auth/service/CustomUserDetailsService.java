package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import java.util.Arrays;
import java.util.List;

import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.model.LoginModel;
import com.computingprojecthvlhasanka.ghdserverapp.auth.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

  @Autowired
	private LoginRepository userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;
  
  /**
   * Retrieving user record from the MySQL DB using the email address
   */
  @Override
  public UserDetails loadUserByUsername(String emailAddress) throws UsernameNotFoundException {
    List<SimpleGrantedAuthority> roles = null;

    // Retrieving the particular user's record from the MySQL DB using the request emailAddress
    LoginEntity user = userDao.findByEmailAddress(emailAddress);

    // Checking whether a user is available
    if (user != null) {
      // Passing the available roles into an array
			roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
      // Returning the email address, password, and role
			return new User(user.getEmailAddress(), user.getPassword(), roles);
		}

    // Complied if the email address is not found in the MySQL DB
		throw new UsernameNotFoundException("User not found with the name: " + emailAddress);
  
  }

  /**
   * Inserting a new record into the 'Logins' relation in the MySQL DB
   */
  public LoginEntity addLoginRecord(LoginModel user) {

		LoginEntity newLoginRecord = new LoginEntity();
		newLoginRecord.setEmailAddress(user.getEmailAddress());
		newLoginRecord.setPassword(bcryptEncoder.encode(user.getPassword()));
		newLoginRecord.setRole(user.getRole());
		return userDao.save(newLoginRecord);

	}

}
