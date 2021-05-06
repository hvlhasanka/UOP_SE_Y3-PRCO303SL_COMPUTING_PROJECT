package com.computingprojecthvlhasanka.ghdserverapp.account.service;

import com.computingprojecthvlhasanka.ghdserverapp.account.entity.AccountEntity;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface AccountService {

  // POST - Saving a new account
  AccountEntity saveAccount(AccountEntity account);

  // POST - Saving a list of accounts
  List<AccountEntity> saveAccounts(List<AccountEntity> accounts);

  // GET - Retrieving all accounts
  List<AccountEntity> getAllAccounts();

  // GET - Retrieving an account according to the 'AccountID'
  AccountEntity getAccountByAccountId(long accountId);

  // GET - Retrieving accounts according to the 'LastName'
  // List<Account> getAccountsByLastName(String lastName);

  /**
   * Retrieving the 'accountId' from the 'accounts' relation for the email_address in the 'logins' relation
   * @param emailAddress
   * @return
   */
  Long getAccountIdByLoginEmailAddress(String emailAddress);

}
