package com.computingprojecthvlhasanka.ghdserverapp.service;

import com.computingprojecthvlhasanka.ghdserverapp.model.Account;
import com.computingprojecthvlhasanka.ghdserverapp.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    // POST - Saving a new account
    @Override
    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    // POST - Saving a list of accounts
    @Override
    public List<Account> saveAccounts(List<Account> accounts) {
        return accountRepository.saveAll(accounts);
    }

    // GET - Retrieving all accounts
    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    // GET - Retrieving an account according to the 'AccountID'
    @Override
    public Account getAccountByAccountId(long accountId) {
        return accountRepository.findById(accountId).orElse(null);
    }

    // GET - Retrieving accounts according to the 'LastName'
 //   @Override
  //  public List<Account> getAccountsByLastName(String lastName) {
   //     return accountRepository.findByLastName(lastName);
   // }

}
