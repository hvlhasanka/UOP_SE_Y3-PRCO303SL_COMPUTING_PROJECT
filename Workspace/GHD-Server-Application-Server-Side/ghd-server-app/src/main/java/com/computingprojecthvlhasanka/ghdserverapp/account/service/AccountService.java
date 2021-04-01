package com.computingprojecthvlhasanka.ghdserverapp.account.service;

import com.computingprojecthvlhasanka.ghdserverapp.account.model.Account;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface AccountService {

    // POST - Saving a new account
    Account saveAccount(Account account);

    // POST - Saving a list of accounts
    List<Account> saveAccounts(List<Account> accounts);

    // GET - Retrieving all accounts
    List<Account> getAllAccounts();

    // GET - Retrieving an account according to the 'AccountID'
    Account getAccountByAccountId(long accountId);

    // GET - Retrieving accounts according to the 'LastName'
   // List<Account> getAccountsByLastName(String lastName);

}
