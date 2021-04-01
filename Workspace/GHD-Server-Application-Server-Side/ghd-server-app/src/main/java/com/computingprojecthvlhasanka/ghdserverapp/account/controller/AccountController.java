package com.computingprojecthvlhasanka.ghdserverapp.account.controller;

import com.computingprojecthvlhasanka.ghdserverapp.account.model.Account;
import com.computingprojecthvlhasanka.ghdserverapp.account.service.AccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    private AccountServiceImpl accountService;

    @GetMapping("/accounts")
    public List<Account> findAllAccounts() {
        return accountService.getAllAccounts();
    }

}
