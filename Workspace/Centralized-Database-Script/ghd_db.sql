-- Database Name: ghds_db
-- Database Name Abbreviation Long Form: Goverment Health Department System (GHDS) Database (DB)

-- Deletes if a database named ghds_db already exists
  DROP DATABASE IF EXISTS ghds_db;

-- Creating database
  CREATE DATABASE ghds_db;

-- |------------------------------------------------------------------------------------------------|

-- Accessing newly created database
  USE ghds_db;

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 1 - NamePrefixes
  CREATE TABLE NamePrefixes(
    NamePrefixID INT(3) NOT NULL AUTO_INCREMENT,
    NamePrefix VARCHAR(8) NOT NULL,
    CONSTRAINT PK_NamePrefix PRIMARY KEY (NamePrefixID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 1 - NamePrefixes
  ALTER TABLE NamePrefixes AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 1 - NamePrefixes
  INSERT INTO NamePrefixes(NamePrefix)  
  VALUES
  ("Sir."),
  ("Mr."),
  ("Miss."),
  ("Ms."),
  ("Mrs."),
  ("Dr.");

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 2 - AccountTypes
  CREATE TABLE AccountTypes(
    AccountTypeID INT(3) NOT NULL AUTO_INCREMENT,
    AccountType VARCHAR(30) NOT NULL,
    CONSTRAINT PK_AccountType PRIMARY KEY (AccountTypeID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 2 - AccountTypes
  ALTER TABLE NamePrefixes AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 2 - AccountTypes
  INSERT INTO AccountTypes(AccountTypes)
  VALUES 
  ('Unregistered Public User'),
  ('Registered Public User'),
  ('Operator'),
  ('Administrator');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 3 - Accounts
  CREATE TABLE Accounts(
    AccountID INT(10) NOT NULL AUTO_INCREMENT,
    npNamePrefixID INT(3) NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    MiddleName VARCHAR(50),
    LastName VARCHAR(100) NOT NULL,
    atAccountTypeID INT(7) NOT NULL,
    LastEditDateTime DATETIME ON UPDATE convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    CreateDateTime DATETIME NOT NULL DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    CONSTRAINT PK_Account PRIMARY KEY (AccountID),
    CONSTRAINT FK_AT_AccountTypeID FOREIGN KEY (atAccountTypeID) REFERENCES AccountTypes(AccountTypeID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 3 - Accounts
  ALTER TABLE Accounts AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 3 - Accounts
  INSERT INTO Accounts(npNamePrefixID, FirstName, MiddleName, LastName, atAccountTypeID)
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 4 - AccountPhoneNumbers
  CREATE TABLE AccountPhoneNumbers(
    aAccountID INT(10) NOT NULL,
    PhoneNumber CHAR(10) NOT NULL,
    CONSTRAINT PK_AccountPhoneNumber PRIMARY KEY (aAccountID, PhoneNumber),
    CONSTRAINT FK_A_AccountID FOREIGN KEY (aAccountID) REFERENCES Account(AccountID)
  )ENGINE=INNODB;

-- INSERTING RECORDS: TABLE 4 - AccountPhoneNumbers
  INSERT INTO AccountPhoneNumbers(aAccountID, PhoneNumber)
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 5 - Cities
  CREATE TABLE Cities(
    CityID INT(7) NOT NULL AUTO_INCREMENT,
    City VARCHAR(100) NOT NULL,
    CONSTRAINT PK_City PRIMARY KEY (CityID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 5 - Cities
  ALTER TABLE Cities AUTO_INCREMENT = 0000001;

-- INSERTING RECORDS: TABLE 5 - Cities
  INSERT INTO Cities(City) 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 6 - PostalCodes
  CREATE TABLE PostalCodes(
    PostalCodeID INT(7) NOT NULL AUTO_INCREMENT,
    PostalCode VARCHAR(10) NOT NULL,
    CONSTRAINT PK_PostalCode PRIMARY KEY (PostalCodeID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 6 - PostalCodes
  ALTER TABLE PostalCodes AUTO_INCREMENT = 0000001;

-- INSERT RECORDS: TABLE 6 - PostalCodes
  INSERT INTO PostalCodes(PostalCodes) 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 7 - Districts
  CREATE TABLE Districts(
    DistrictID INT(3) NOT NULL AUTO_INCREMENT,
    District VARCHAR(60) NOT NULL, 
    CONSTRAINT PK_District PRIMARY KEY (DistrictID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 7 - Districts
  ALTER TABLE PostalCodes AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 7 - Districts
  INSERT INTO Districts(District) 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 8 - AgeGroups
  CREATE TABLE AgeGroups(
    AgeGroupID INT(3) NOT NULL AUTO_INCREMENT,
    AgeGroup VARCHAR(10) NOT NULL,
    CONSTRAINT PK_AgeGroup PRIMARY KEY (AgeGroupID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 8 - AgeGroups
  ALTER TABLE AgeGroupID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 8 - AgeGroups
  INSERT INTO AgeGroups() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 9 - Genders
  CREATE TABLE Genders(
    GenderID INT(3) NOT NULL AUTO_INCREMENT,
    Gender VARCHAR(8) NOT NULL,
    CONSTRAINT PK_Gender PRIMARY KEY (GenderID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 9 - Genders
  ALTER TABLE GenderID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 9 - Genders
  INSERT INTO Genders(Gender) 
  VALUES 
  ('Male'),
  ('Female'),
  ('Other'),
  ('Rather Not Mention');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 10 - UnregisteredPublicUsers
  CREATE TABLE UnregisteredPublicUsers(
    UnregisteredUserID INT(10) NOT NULL AUTO_INCREMENT,
    aAccountID INT(10) NOT NULL,
    NIC VARCHAR(12) NOT NULL,
    PassportNo VARCHAR(15) NOT NULL,
    StreetAddress VARCHAR(120),
    cCityID INT(3) NOT NULL,
    pcPostalCodeID INT(3),
    dDistrictID INT(3) NOT NULL,
    agAgeGroupID INT(3),
    gGenderID INT(3),
    CONSTRAINT PK_UnregisteredPublicUser PRIMARY KEY (UnregisteredUserID, aAccountID), 
    CONSTRAINT FK_A_AccountID FOREIGN KEY (aAccountID) REFERENCES Accounts(AccountID),
    CONSTRAINT FK_C_CityID FOREIGN KEY (cCityID) REFERENCES Cities(CityID),
    CONSTRAINT FK_PC_PostalCodeID FOREIGN KEY (psPostalCodeID) REFERENCES PostalCodes(PostalCodeID),
    CONSTRAINT FK_D_DistrictID FOREIGN KEY (dDistrictID) REFERENCES Districts(DistrictID),
    CONSTRAINT FK_AG_AgeGroupID FOREIGN KEY (agAgeGroupID) REFERENCES AgeGroups(AgeGroupID),
    CONSTRAINT FK_G_GenderID FOREIGN KEY (gGenderID) REFERENCES Genders(GenderID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 10 - UnregisteredPublicUsers
  ALTER TABLE UnregisteredUserID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 10 - RegisteredPublicUsers
  INSERT INTO RegisteredPublicUsers(aAccountID, NIC, PassportNo, StreetAddress, cCityID, pcPostalCodeID, dDistrictID, agAgeGroupID, gGenderID) 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 11 - RegisteredPublicUsers
  CREATE TABLE RegisteredPublicUsers(
    RegisteredUserID INT(10) NOT NULL AUTO_INCREMENT,
    aAccountID INT(10) NOT NULL,
    NIC VARCHAR(12) NOT NULL,
    PassportNo VARCHAR(15) NOT NULL,
    StreetAddress VARCHAR(120),
    cCityID INT(3) NOT NULL,
    pcPostalCodeID INT(3),
    dDistrictID INT(3) NOT NULL,
    agAgeGroupID INT(3),
    gGenderID INT(3),
    CONSTRAINT PK_RegisteredPublicUser PRIMARY KEY (RegisteredUserID, aAccountID), 
    CONSTRAINT FK_A_AccountID FOREIGN KEY (aAccountID) REFERENCES Accounts(AccountID),
    CONSTRAINT FK_C_CityID FOREIGN KEY (cCityID) REFERENCES Cities(CityID),
    CONSTRAINT FK_PC_PostalCodeID FOREIGN KEY (psPostalCodeID) REFERENCES PostalCodes(PostalCodeID),
    CONSTRAINT FK_D_DistrictID FOREIGN KEY (dDistrictID) REFERENCES Districts(DistrictID),
    CONSTRAINT FK_AG_AgeGroupID FOREIGN KEY (agAgeGroupID) REFERENCES AgeGroups(AgeGroupID),
    CONSTRAINT FK_G_GenderID FOREIGN KEY (gGenderID) REFERENCES Genders(GenderID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 11 - RegisteredPublicUsers
  ALTER TABLE UnregisteredUserID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 11 - RegisteredPublicUsers
  INSERT INTO RegisteredPublicUsers(aAccountID, NIC, PassportNo, StreetAddress, cCityID, pcPostalCodeID, dDistrictID, agAgeGroupID, gGenderID) 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 12 - Operators
  CREATE TABLE Operators(
    OperatorID INT(3) NOT NULL AUTO_INCREMENT,
    aAccountID INT(10) NOT NULL,
    CONSTRAINT PK_Operator PRIMARY KEY (OperatorID, aAccountID)
    CONSTRAINT FK_A_AccountID FOREIGN KEY (aAccountID) REFERENCES Accounts(AccountID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 12 - Operators
  ALTER TABLE OperatorID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 12 - Operators
  INSERT INTO Operators(aAccount) 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 13 - Administrators
  CREATE TABLE Administrators(
    AdminID INT(3) NOT NULL AUTO_INCREMENT,
    aAccountID INT(10) NOT NULL,
    aRegisteredByAdminID INT(3) NOT NULL,
    CONSTRAINT PK_City PRIMARY KEY (CityID),
    CONSTRAINT FK_A_AdminID FOREIGN KEY (aRegisteredByAdminID) REFERENCES Administrators(AdminID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 13 - Administrators
  ALTER TABLE AdminID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 13 - Administrators
  INSERT INTO Administrators(aAccountID, aRegisteredByAdminID) 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 14 - AccountStatuses
  CREATE TABLE AccountStatuses(
    AccountStatusID INT(3) NOT NULL AUTO_INCREMENT,
    AccountStatus VARCHAR(10) NOT NULL,
    CONSTRAINT PK_AccountStatus PRIMARY KEY (AccountStatusID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 14 - AccountStatuses
  ALTER TABLE AccountStatusID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 14 - AccountStatuses
  INSERT INTO AccountStatuses(AccountStatus) 
  VALUES 
  ('Enabled'),
  ('Disabled');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 15 - Logins
  CREATE TABLE Logins(
    LoginID INT(10) NOT NULL AUTO_INCREMENT,
    EmailAddress VARCHAR(150) NOT NULL UNIQUE,
    PasswordHash VARCHAR(150) NOT NULL,
    asAccountStatusID INT(7) NOT NULL,
    aAccountID INT(7) NOT NULL,
    CONSTRAINT PK_Login PRIMARY KEY (LoginID),
    CONSTRAINT FK_AS_AccountStatusID FOREIGN KEY (asAccountStatusID) REFERENCES AccountStatuses(AccountStatusID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 15 - Logins
  ALTER TABLE LoginID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 15 - Logins
  INSERT INTO Logins() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 16 - AcountActivities
  CREATE TABLE AcountActivities(
    AccountActivityID INT(3) NOT NULL AUTO_INCREMENT,
    AccountActivity VARCHAR(10) NOT NULL,
    CONSTRAINT PK_AccountActivity PRIMARY KEY (AccountActivityID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 16 - AcountActivities
  ALTER TABLE AccountActivityID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 16 - AcountActivities
  INSERT INTO AcountActivities(AccountActivity) 
  VALUES 
  ('ONLINE'),
  ('OFFLINE');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 17 - LoginActivities
  CREATE TABLE LoginActivities(
    LoginActivityID INT(10) NOT NULL AUTO_INCREMENT,
    LoginDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    LogoutDateTime DATETIME,
    asAccountActivityID INT(3) NOT NULL,
    lLoginID INT(10) NOT NULL,
    CONSTRAINT PK_LoginActivity PRIMARY KEY (LoginActivityID),
    CONSTRAINT FK_AA_AccountActivityID FOREIGN KEY (asAccountActivityID) REFERENCES AccountActivities(AccountActivityID),
    CONSTRAINT FK_L_LoginID FOREIGN KEY (lLoginID) REFERENCES Logins(LoginID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 17 - LoginActivities
  ALTER TABLE LoginActivityID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 17 - LoginActivities
  INSERT INTO PostalCodes() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 18 - ForgotPasswords
  CREATE TABLE ForgotPasswords(
    RecoveryID INT(10) NOT NULL AUTO_INCREMENT,
    PinCode INT(6) NOT NULL,
    CreatedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    lLoginID INT(10) NOT NULL,
    CONSTRAINT PK_City PRIMARY KEY (CityID),
    CONSTRAINT FK_L_LoginID FOREIGN KEY (lLoginID) REFERENCES Logins(LoginID) 
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 18 - ForgotPasswords
  ALTER TABLE RecoveryID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 18 - ForgotPasswords
  INSERT INTO ForgotPasswords() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 19 - ReviewStatuses
  CREATE TABLE ReviewStatuses(
    ReviewStatusID INT(3) NOT NULL AUTO_INCREMENT,
    ReviewStatus VARCHAR(10) NOT NULL,
    CONSTRAINT PK_ReviewStatus PRIMARY KEY (ReviewStatusID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 19 - ReviewStatuses
  ALTER TABLE ReviewStatusID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 19 - ReviewStatuses
  INSERT INTO ReviewStatuses(ReviewStatus) 
  VALUES 
  ('PENDING'),
  ('REVIEWED');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 20 - FeedbackReports
  CREATE TABLE FeedbackReports(
    ReportID INT(10) NOT NULL AUTO_INCREMENT, 
    Subject VARCHAR(150) NOT NULL, 
    Feedback VARCHAR(250) NOT NULL, 
    rsReviewStatusID INT(3) DEFAULT 001, 
    SubmittedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'), 
    oForwardedByOperatorID INT(3), 
    oForwardedByAccountID INT(10), 
    oReviewedByOperatorID INT(3), 
    oReviewedByAccountID INT(10), 
    aReviewedByAdminID INT(3), 
    aReviewedByAccountID INT(10), 
    CONSTRAINT PK_City PRIMARY KEY (CityID), 
    CONSTRAINT FK_RS_ReviewStatusID FOREIGN KEY (rsReviewStatusID) REFERENCES ReviewStatuses(ReviewStatusID), 
    CONSTRAINT FK_O_ForwardedByOpertorID FOREIGN KEY (oForwardedByOperatorID) REFERENCES Operators(OperatorID), 
    CONSTRAINT FK_O_ForwardedByAccountID FOREIGN KEY (oForwardedByAccountID) REFERENCES Operators(aAccountID), 
    CONSTRAINT FK_O_ReviewedByOperatorID FOREIGN KEY (oReviewedByOperatorID) REFERENCES Operators(OperatorID), 
    CONSTRAINT FK_O_ReviewedByAccountID FOREIGN KEY (oReviewedByAccountID) REFERENCES Operators(aAccountID), 
    CONSTRAINT FK_A_ReviewedByAdminID FOREIGN KEY (aReviewedByAdminID) REFERENCES Administrators(AdminID), 
    CONSTRAINT FK_A_ReviewedByAccountID FOREIGN KEY (aReviewedByAccountID) REFERENCES Operators(aAccountID), 
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 20 - FeedbackReports
  ALTER TABLE ReportID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 20 - FeedbackReports
  INSERT INTO FeedbackReports() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 21 - SubmittedUserTypes
  CREATE TABLE SubmittedUserTypes(
    UserTypeID INT(3) NOT NULL AUTO_INCREMENT,
    UserType VARCHAR() NOT NULL,
    CONSTRAINT PK_UserTypeID PRIMARY KEY (UserTypeID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 21 - SubmittedUserTypes
  ALTER TABLE UserTypeID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 21 - SubmittedUserTypes
  INSERT INTO SubmittedUserTypes() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 22 - InternalFeedbackReports
  CREATE TABLE InternalFeedbackReports(
    InternalReportID INT(10) NOT NULL AUTO_INCREMENT,
    frReportID INT(10) NOT NULL,
    sutUserTypeID INT(3) NOT NULL,
    rpuPublishedRegisteredUserID INT (10),
    rpuPublishedAccountID INT(10),
    oPublishedOperatorID INT(3),
    oPublishedAccountID INT(10),
    CONSTRAINT PK_InternalReportID PRIMARY KEY (InternalReportID),
    CONSTRAINT FK_FR_ReportID FOREIGN KEY (frReportID) REFERENCES FeedbackReports(ReportID), 
    CONSTRAINT FK_SUT_UserTypeID FOREIGN KEY (sutUserTypeID) REFERENCES SubmittedUserTypes(UserTypeID), 
    CONSTRAINT FK_RPU_PublishedRegisteredUserID FOREIGN KEY (rpuPublishedRegisteredUserID) REFERENCES UnregisteredPublicUsers(RegisteredUserID), 
    CONSTRAINT FK_RPU_PublishedAccountID FOREIGN KEY (rpuPublishedAccountID) REFERENCES UnregisteredPublicUsers(aAccountID), 
    CONSTRAINT FK_O_PublishedOperatorID FOREIGN KEY (oPublishedOperatorID) REFERENCES Operators(OperatorID), 
    CONSTRAINT FK_O_PublishedAccountID FOREIGN KEY (oPublishedAccountID) REFERENCES Operators(aAccountID), 
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 22 - InternalFeedbackReports
  ALTER TABLE InternalReportID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 22 - InternalFeedbackReports
  INSERT INTO InternalFeedbackReports() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 23 - ExternalFeedbackReports
  CREATE TABLE ExternalFeedbackReports(
    ExternalReportID INT(10) NOT NULL AUTO_INCREMENT,
    frReportID INT(10) NOT NULL,
    AuthorReachableEmailAddress VARCHAR(150) NOT NULL,
    upuPublishedUnregisteredUserID INT(10) NOT NULL,
    upuPublishedAccountID INT(10) NOT NULL,
    CONSTRAINT PK_ExternalFeedbackReport PRIMARY KEY (ExternalReportID),
    CONSTRAINT FK_FR_ReportID FOREIGN KEY (frReportID) REFERENCES FeedbackReports(ReportID),  
    CONSTRAINT FK_UPU_PublishedUnregisteredUserID FOREIGN KEY (upuPublishedUnregisteredUserID) REFERENCES UnregisteredPublicUsers(UnregisteredUserID), 
    CONSTRAINT FK_UPU_PublishedAccountID FOREIGN KEY (upuPublishedAccountID) REFERENCES UnregisteredPublicUsers(aAccountID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 23 - ExternalFeedbackReports
  ALTER TABLE ExternalReportID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 23 - ExternalFeedbackReports
  INSERT INTO ExternalFeedbackReports() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 24 - Symptoms
  CREATE TABLE Symptoms(
    SymptomsID INT(3) NOT NULL AUTO_INCREMENT,
    Symptoms VARCHAR(150) NOT NULL,
    CONSTRAINT PK_Symptom PRIMARY KEY (SymptomsID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 24 - Symptoms
  ALTER TABLE SymptomsID AUTO_INCREMENT = 001;

-- INSERT RECORDS: TABLE 24 - Symptoms
  INSERT INTO Symptoms() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 25 - HealthStatusReports
  CREATE TABLE HealthStatusReports(
    ReportID INT(10) NOT NULL AUTO_INCREMENT,
    sSymptomID INT(3) NOT NULL,
    Message VARCHAR(150) NOT NULL,
    rsReviewStatusID INT(3) NOT NULL,
    SubmittedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'), 
    ProofOfTCRTest BLOB,
    upuPublishedUnregisteredUserID INT(10),
    upuPublishedAccountID INT(10),
    rpuPublishedRegisteredUserID INT(10),
    rpuPublishedAccountID INT(10), 
    oReviewedByOperatorID INT(10),
    oReviewedByAccountID INT (10),
    CONSTRAINT PK_ExternalFeedbackReport PRIMARY KEY (ReportID),
    CONSTRAINT FK_S_SymptomID FOREIGN KEY (sSymptomID) REFERENCES Symptoms(SymptomID),
    CONSTRAINT FK_RS_ReviewStatusID FOREIGN KEY (rsReviewStatusID) REFERENCES ReviewStatuses(ReviewStatusID),
    CONSTRAINT FK_UPU_PublishedUnregisteredUserID FOREIGN KEY (upuPublishedUnregisteredUserID) REFERENCES UnregisteredPublicUsers(UnregisteredUserID),
    CONSTRAINT FK_UPU_PublishedAccountID FOREIGN KEY (upuPublishedAccountID) REFERENCES UnregisteredPublicUsers(aAccountID),
    CONSTRAINT FK_RPU_PublishedRegisteredUserID FOREIGN KEY (rpuPublishedRegisteredUserID) REFERENCES RegisteredPublicUsers(RegisteredUserID),
    CONSTRAINT FK_RPU_PublishedAccountID FOREIGN KEY (rpuPublishedAccountID) REFERENCES RegisteredPublicUsers(aAccountID),
    CONSTRAINT FK_O_ReviewedByOperatorID FOREIGN KEY (oReviewedByOperatorID) REFERENCES Operators(OperatorID),
    CONSTRAINT FK_O_ReviewedByAccountID FOREIGN KEY (oReviewedByAccountID) REFERENCES Operators(aAccountID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 25 - HealthStatusReports
  ALTER TABLE ReportID AUTO_INCREMENT = 0000000001;

-- INSERT RECORDS: TABLE 25 - HealthStatusReports
  INSERT INTO HealthStatusReports() 
  VALUES 
  ();



