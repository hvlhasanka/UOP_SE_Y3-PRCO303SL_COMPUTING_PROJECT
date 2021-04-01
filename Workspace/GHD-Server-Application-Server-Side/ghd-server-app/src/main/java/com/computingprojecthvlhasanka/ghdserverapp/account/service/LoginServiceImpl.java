package com.computingprojecthvlhasanka.ghdserverapp.account.service;

import com.computingprojecthvlhasanka.ghdserverapp.account.model.Login;
import com.computingprojecthvlhasanka.ghdserverapp.account.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    // GET - Retrieving accounts according to the 'LastName'
    @Override
    public Login getLoginByEmailAddress(String emailAddress) {
        return loginRepository.findByEmailAddress(emailAddress);
    }

}
