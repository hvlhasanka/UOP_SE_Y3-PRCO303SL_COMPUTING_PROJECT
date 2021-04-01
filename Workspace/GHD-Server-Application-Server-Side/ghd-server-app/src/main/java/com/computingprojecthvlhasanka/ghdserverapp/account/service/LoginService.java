package com.computingprojecthvlhasanka.ghdserverapp.account.service;

import com.computingprojecthvlhasanka.ghdserverapp.account.model.Login;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LoginService {

    // GET - Retrieving all accounts
    List<Login> getAllLogins();

    // GET - Retrieving accounts according to the 'EmailAddress'
    Login getLoginByEmailAddress(String emailAddress);

}
