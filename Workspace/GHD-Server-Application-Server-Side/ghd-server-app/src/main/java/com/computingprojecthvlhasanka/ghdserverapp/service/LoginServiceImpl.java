package com.computingprojecthvlhasanka.ghdserverapp.service;

import com.computingprojecthvlhasanka.ghdserverapp.model.Login;
import com.computingprojecthvlhasanka.ghdserverapp.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

}
