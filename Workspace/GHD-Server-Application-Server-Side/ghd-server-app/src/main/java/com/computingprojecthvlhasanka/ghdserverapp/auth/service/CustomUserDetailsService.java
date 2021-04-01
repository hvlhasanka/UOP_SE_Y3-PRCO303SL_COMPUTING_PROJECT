package com.computingprojecthvlhasanka.ghdserverapp.auth.service;

import java.util.Arrays;
import java.util.List;

import com.computingprojecthvlhasanka.ghdserverapp.auth.model.DAOUser;
import com.computingprojecthvlhasanka.ghdserverapp.auth.model.UserDTO;
import com.computingprojecthvlhasanka.ghdserverapp.auth.repository.UserRepository;

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
	private UserRepository userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;
  
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    List<SimpleGrantedAuthority> roles = null;

    // Retrieving the particular user's record from the MySQL DB using the request username
    DAOUser user = userDao.findByUsername(username);

    // Checking whether a user is available
    if (user != null) {
      // Passing the available roles into an array
			roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
      // Returning the username, password, and role
			return new User(user.getUsername(), user.getPassword(), roles);
		}

    // Complied if the username is not found in the MySQL DB
		throw new UsernameNotFoundException("User not found with the name: " + username);
  
  }

  public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setRole(user.getRole());
		return userDao.save(newUser);
	}

}
