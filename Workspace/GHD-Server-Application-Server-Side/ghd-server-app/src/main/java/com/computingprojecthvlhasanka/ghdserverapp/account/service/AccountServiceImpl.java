package com.computingprojecthvlhasanka.ghdserverapp.account.service;

import com.computingprojecthvlhasanka.ghdserverapp.account.entity.AccountEntity;
import com.computingprojecthvlhasanka.ghdserverapp.account.repository.AccountRepository;
import com.computingprojecthvlhasanka.ghdserverapp.auth.entity.LoginEntity;
import com.computingprojecthvlhasanka.ghdserverapp.auth.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private LoginRepository loginRepository;

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
  //    return accountRepository.findByLastName(lastName);
   // }

    /**
     * Retrieving the 'accountId' from the 'accounts' relation for the email_address in the 'logins' relation
     */
    @Override
    public Long getAccountIdByLoginEmailAddress(String emailAddress){
        
      // Retrieving the particular user's record from the MySQL DB using the request emailAddress
      LoginEntity loginRecord = loginRepository.findByEmailAddress(emailAddress);

      // Retrieving the particular user's accountId from the 'accounts' relation in MySQL DB
      AccountEntity accountRecord = loginRecord.getAccount();

      // Retrieving the 'accountId' value from the 'accountRecord' instance
      long accountId = accountRecord.getAccountId();

      return accountId;

    }

}
