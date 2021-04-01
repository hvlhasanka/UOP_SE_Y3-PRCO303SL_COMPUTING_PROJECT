package com.computingprojecthvlhasanka.ghdserverapp.account.controller;

import java.util.List;

import com.computingprojecthvlhasanka.ghdserverapp.account.model.Login;
import com.computingprojecthvlhasanka.ghdserverapp.account.service.LoginServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

  @Autowired
  private LoginServiceImpl loginService;

  @GetMapping("/logins")
  public List<Login> findAllAccounts() {
      return loginService.getAllLogins();
  }

}
