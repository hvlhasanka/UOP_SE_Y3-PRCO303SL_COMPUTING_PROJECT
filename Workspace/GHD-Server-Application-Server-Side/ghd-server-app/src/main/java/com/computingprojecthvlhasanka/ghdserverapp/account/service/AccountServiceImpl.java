package com.computingprojecthvlhasanka.ghdserverapp.account.service;

import com.computingprojecthvlhasanka.ghdserverapp.account.entity.AccountEntity;
import com.computingprojecthvlhasanka.ghdserverapp.account.repository.AccountRepository;

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
    public AccountEntity saveAccount(AccountEntity account) {
        return accountRepository.save(account);
    }

    // POST - Saving a list of accounts
    @Override
    public List<AccountEntity> saveAccounts(List<AccountEntity> accounts) {
        return accountRepository.saveAll(accounts);
    }

    // GET - Retrieving all accounts
    @Override
    public List<AccountEntity> getAllAccounts() {
        return accountRepository.findAll();
    }

    // GET - Retrieving an account according to the 'AccountID'
    @Override
    public AccountEntity getAccountByAccountId(long accountId) {
        return accountRepository.findById(accountId).orElse(null);
    }

    // GET - Retrieving accounts according to the 'LastName'
 //   @Override
  //  public List<Account> getAccountsByLastName(String lastName) {
   //     return accountRepository.findByLastName(lastName);
   // }

}
