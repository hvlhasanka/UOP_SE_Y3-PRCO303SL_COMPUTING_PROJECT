package com.computingprojecthvlhasanka.ghdserverapp.controller;

import com.computingprojecthvlhasanka.ghdserverapp.model.Account;
import com.computingprojecthvlhasanka.ghdserverapp.service.AccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    private AccountServiceImpl accountService;

    // @GetMapping("/accounts")
    // public List<Account> findAllAccounts() {
    //     return accountService.getAllAccounts();
    // }

}
