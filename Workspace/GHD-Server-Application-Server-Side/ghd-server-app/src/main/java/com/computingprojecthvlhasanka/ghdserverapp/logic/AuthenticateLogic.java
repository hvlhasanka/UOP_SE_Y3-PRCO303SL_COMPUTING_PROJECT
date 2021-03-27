package com.computingprojecthvlhasanka.ghdserverapp.logic;

public class AuthenticateLogic {

    private long loginId;
    private String emailAddress;
    private String passwordHash;
    private int accountTypeId;
    private String accountType;
    private int accountStatusId;
    private String accountStatus;
    private int accountActivityId;
    private String accountActivity;

    public AuthenticateLogic() {
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public int getAccountTypeId() {
        return accountTypeId;
    }

    public void setAccountTypeId(int accountTypeId) {
        this.accountTypeId = accountTypeId;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public int getAccountStatusId() {
        return accountStatusId;
    }

    public void setAccountStatusId(int accountStatusId) {
        this.accountStatusId = accountStatusId;
    }

    public String getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }

    public int getAccountActivityId() {
        return accountActivityId;
    }

    public void setAccountActivityId(int accountActivityId) {
        this.accountActivityId = accountActivityId;
    }

    public String getAccountActivity() {
        return accountActivity;
    }

    public void setAccountActivity(String accountActivity) {
        this.accountActivity = accountActivity;
    }


}
