-- Database Name: ghds_db
-- Database Name Abbreviation Long Form: Goverment Health Department Management System (GHDS) Database (DB)

-- Deletes if a database named ghdms_db already exists
  DROP DATABASE IF EXISTS ghdms_db;

-- Creating database
  CREATE DATABASE ghdms_db;

-- |------------------------------------------------------------------------------------------------|

-- Accessing newly created database
  USE ghdms_db;

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 1 - NamePrefixes
  CREATE TABLE NamePrefixes(
    NamePrefixID TINYINT NOT NULL AUTO_INCREMENT,
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
    AccountTypeID TINYINT NOT NULL AUTO_INCREMENT,
    AccountType VARCHAR(30) NOT NULL,
    CONSTRAINT PK_AccountType PRIMARY KEY (AccountTypeID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 2 - AccountTypes
  ALTER TABLE NamePrefixes AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 2 - AccountTypes
  INSERT INTO AccountTypes(AccountTypes)
  VALUES 
  ('Administrator'),
  ('Operator'),
  ('Registered Public User'),
  ('Unregistered Public User');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 3 - Accounts
  CREATE TABLE Accounts(
    AccountID INT NOT NULL AUTO_INCREMENT,
    npNamePrefixID TINYINT NOT NULL,
    FirstName VARCHAR(90) NOT NULL,
    MiddleName VARCHAR(90),
    LastName VARCHAR(150) NOT NULL,
    atAccountTypeID TINYINT NOT NULL,
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
  (001, 'Lucas', 'Andy', 'Anderson', 001),
  (002, 'Andrew', '', 'Wilson', 002),
  (003, 'Jack', 'Sammy', 'Cooper', 003),
  (004, 'Sarah', 'Sam', 'Wellington', 004);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 4 - AccountPhoneNumbers
  CREATE TABLE AccountPhoneNumbers(
    aAccountID INT NOT NULL,
    PhoneNumber CHAR(12) NOT NULL,
    CONSTRAINT PK_AccountPhoneNumber PRIMARY KEY (aAccountID, PhoneNumber),
    CONSTRAINT FK_A_AccountID FOREIGN KEY (aAccountID) REFERENCES Account(AccountID)
  )ENGINE=INNODB;

-- INSERTING RECORDS: TABLE 4 - AccountPhoneNumbers
  INSERT INTO AccountPhoneNumbers(aAccountID, PhoneNumber)
  VALUES 
  (0000000001, '074 4125662'),
  (0000000001, '074 2464245'),
  (0000000002, '072 4322353'),
  (0000000002, '076 2422343'),
  (0000000003, '071 5434235'),
  (0000000003, '072 4648642'),
  (0000000004, '076 4235475'),
  (0000000004, '076 4362433');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 5 - Cities
  CREATE TABLE Cities(
    CityID INT NOT NULL AUTO_INCREMENT,
    City VARCHAR(200) NOT NULL,
    CONSTRAINT PK_City PRIMARY KEY (CityID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 5 - Cities
  ALTER TABLE Cities AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 5 - Cities
  INSERT INTO Cities(City) 
  VALUES 
  ('Pettah'),
  ('FORT'),
  ('Borrella'),
  ('Kollupitiya');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 6 - PostalCodes
  CREATE TABLE PostalCodes(
    PostalCodeID INT NOT NULL AUTO_INCREMENT,
    PostalCode VARCHAR(10) NOT NULL,
    CONSTRAINT PK_PostalCode PRIMARY KEY (PostalCodeID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 6 - PostalCodes
  ALTER TABLE PostalCodes AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 6 - PostalCodes
  INSERT INTO PostalCodes(PostalCodes) 
  VALUES 
  ('34115'),
  ('45563'),
  ('43886'),
  ('86433');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 7 - Districts
  CREATE TABLE Districts(
    DistrictID TINYINT NOT NULL AUTO_INCREMENT,
    District VARCHAR(100) NOT NULL, 
    CONSTRAINT PK_District PRIMARY KEY (DistrictID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 7 - Districts
  ALTER TABLE PostalCodes AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 7 - Districts
  INSERT INTO Districts(District) 
  VALUES 
  ('Colombo');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 8 - AgeGroups
  CREATE TABLE AgeGroups(
    AgeGroupID TINYINT NOT NULL AUTO_INCREMENT,
    AgeGroup VARCHAR(20) NOT NULL,
    CONSTRAINT PK_AgeGroup PRIMARY KEY (AgeGroupID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 8 - AgeGroups
  ALTER TABLE AgeGroupID AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 8 - AgeGroups
  INSERT INTO AgeGroups(AgeGroup) 
  VALUES 
  ('Below 18'),
  ('19 to 23'),
  ('24 to 28'),
  ('28 to 32'),
  ('32 to 36'),
  ('37 to 41'),
  ('42 to 46'),
  ('47 to 51'),
  ('52 to 56'),
  ('57 to 61'),
  ('62 to 66'),
  ('67 to 71'),
  ('72 to 76'),
  ('77 to 81'),
  ('82 to 86'),
  ('87 to 92'),
  ('Above 93');
  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 9 - Genders
  CREATE TABLE Genders(
    GenderID TINYINT NOT NULL AUTO_INCREMENT,
    Gender VARCHAR(20) NOT NULL,
    CONSTRAINT PK_Gender PRIMARY KEY (GenderID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 9 - Genders
  ALTER TABLE GenderID AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 9 - Genders
  INSERT INTO Genders(Gender) 
  VALUES 
  ('Male'),
  ('Female'),
  ('Other'),
  ('Rather Not Mention');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 10 - UnregisteredPublicUsers
  CREATE TABLE UnregisteredPublicUsers(
    UnregisteredUserID INT NOT NULL AUTO_INCREMENT,
    aAccountID INT NOT NULL,
    NIC VARCHAR(12) NOT NULL,
    PassportNo VARCHAR(15) NOT NULL,
    StreetAddress VARCHAR(120),
    cCityID INT NOT NULL,
    pcPostalCodeID INT,
    dDistrictID TINYINT NOT NULL,
    agAgeGroupID TINYINT,
    gGenderID TINYINT,
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

-- INSERTING RECORDS: TABLE 10 - RegisteredPublicUsers
  INSERT INTO RegisteredPublicUsers(aAccountID, NIC, PassportNo, StreetAddress, cCityID, pcPostalCodeID, dDistrictID, agAgeGroupID, gGenderID) 
  VALUES 
  (0000000004, '437523543215', '352465342365346', 'No. 332, Castle Side Street', 0000000001, 0000000002, 001, 005, 001);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 11 - RegisteredPublicUsers
  CREATE TABLE RegisteredPublicUsers(
    RegisteredUserID INT NOT NULL AUTO_INCREMENT,
    aAccountID INT NOT NULL,
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

-- INSERTING RECORDS: TABLE 11 - RegisteredPublicUsers
  INSERT INTO RegisteredPublicUsers(aAccountID, NIC, PassportNo, StreetAddress, cCityID, pcPostalCodeID, dDistrictID, agAgeGroupID, gGenderID) 
  VALUES 
  (0000000003, '658634568235', '368904532456497', 'No. 423, Beach Side Street', 0000000001, 0000000002, 001, 008, 001);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 12 - Administrators
  CREATE TABLE Administrators(
    AdminID TINYINT NOT NULL AUTO_INCREMENT,
    aAccountID INT NOT NULL,
    aRegisteredByAdminID TINYINT NOT NULL,
    CONSTRAINT PK_City PRIMARY KEY (CityID),
    CONSTRAINT FK_A_AdminID FOREIGN KEY (aRegisteredByAdminID) REFERENCES Administrators(AdminID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 12 - Administrators
  ALTER TABLE AdminID AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 12 - Administrators
  INSERT INTO Administrators(aAccountID) 
  VALUES 
  (0000000001);
  
-- UPDATING TABLE WITH FOREIGN KEY: Table 12 - Administrators
  -- TODO 
  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 13 - Operators
  CREATE TABLE Operators(
    OperatorID MEDIUMINT NOT NULL AUTO_INCREMENT,
    aAccountID INT NOT NULL,
    CONSTRAINT PK_Operator PRIMARY KEY (OperatorID, aAccountID),
    CONSTRAINT FK_A_AccountID FOREIGN KEY (aAccountID) REFERENCES Accounts(AccountID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 13 - Operators
  ALTER TABLE OperatorID AUTO_INCREMENT = 001; -- TODO : Checking highest value of mediumint

-- INSERTING RECORDS: TABLE 13 - Operators
  INSERT INTO Operators(aAccount) 
  VALUES 
  (0000000002);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 14 - SituationStatuses
  CREATE TABLE SituationStatuses(
	SituationStatusID TINYINT NOT NULL AUTO_INCREMENT,
    SituationStatus VARCHAR(150) NOT NULL,
    CONSTRAINT PK_SituationStatuses PRIMARY KEY (SituationStatusID)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 14 - SituationStatuses
  ALTER TABLE SituationStatusID AUTO_INCREMENT = 001;
  
-- INSERTING RECORDS: TABLE 14 - SituationStatuses
  INSERT INTO SituationStatuses(SituationStatus) 
  VALUES
  ('Positive Cases Rising'),
  ('Country in Full Lockdown');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 15 - ColourCodes
  CREATE TABLE ColourCodes(
    ColourCodeID INT NOT NULL AUTO_INCREMENT,
    ColourCode VARCHAR(25) NOT NULL,
    CONSTRAINT PK_ColourCodes PRIMARY KEY (ColourCodeID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 15 - ColourCodes
  ALTER TABLE ColourCodeID AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 15 - ColourCodes
  INSERT INTO ColourCodes(ColourCode) 
  VALUES 
  ('#ffffff'),
  ('#1be769'),
  ('#fffb0a'),
  ('#ce3d3d');
  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 16 - Severities
  CREATE TABLE Severities(
	SeverityID TINYINT NOT NULL AUTO_INCREMENT,
    Severity VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Severity PRIMARY KEY (SeverityID)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 16 - Severities
  ALTER TABLE Severities AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 16 - Severities
  INSERT INTO Severities(Severity) 
  VALUES 
  ('MINIMAL AFFECT'),
  ('LOW'),
  ('MEDIUM'),
  ('HIGH'),
  ('CRITICAL');
  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 17 - CountryStatuses
  CREATE TABLE CountryStatuses(
    CountryStatusID INT NOT NULL AUTO_INCREMENT,
    ssSituationStatusID INT NOT NULL,
    sSeverityID INT NOT NULL,
    ccColourCodeID INT NOT NULL,
    CurrentCountryStatus BOOLEAN NOT NULL,
    CONSTRAINT PK_CountryStatusID PRIMARY KEY (CountryStatusID),
    CONSTRAINT FK_SS_SitationStatusID FOREIGN KEY (ssSituationStatusID) REFERENCES SituationStatuses(SituationStatusID),
    CONSTRAINT FK_S_SeverityID FOREIGN KEY (sSeverityID) REFERENCES Severities(SeverityID),
    CONSTRAINT FK_CC_ColourCodeID FOREIGN KEY (ccColourCodeID) REFERENCES ColourCodes(ColourCodeID)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 17 - CountryStatuses
  ALTER TABLE CountryStatuses AUTO_INCREMENT = 0000000001;
  
-- INSERTING RECORDS: TABLE 17 - CountryStatuses
  INSERT INTO CountryStatuses(sSituationStatusID, sSeverityID, ccColourCodeID, CurrentCountryStatus)
  VALUES 
  (001, 001, 0000000001, 0),
  (002, 002, 0000000002, 1);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 18 - AccountStatuses
  CREATE TABLE AccountStatuses(
    AccountStatusID TINYINT NOT NULL AUTO_INCREMENT,
    AccountStatus VARCHAR(10) NOT NULL,
    CONSTRAINT PK_AccountStatus PRIMARY KEY (AccountStatusID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 18 - AccountStatuses
  ALTER TABLE AccountStatusID AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 18 - AccountStatuses
  INSERT INTO AccountStatuses(AccountStatus) 
  VALUES 
  ('Enabled'),
  ('Disabled');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 19 - Logins
  CREATE TABLE Logins(
    LoginID INT NOT NULL AUTO_INCREMENT,
    EmailAddress VARCHAR(150) NOT NULL UNIQUE,
    PasswordHash VARCHAR(150) NOT NULL,
    asAccountStatusID INT(7) NOT NULL,
    aAccountID INT(7) NOT NULL,
    CONSTRAINT PK_Login PRIMARY KEY (LoginID),
    CONSTRAINT FK_AS_AccountStatusID FOREIGN KEY (asAccountStatusID) REFERENCES AccountStatuses(AccountStatusID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 19 - Logins
  ALTER TABLE LoginID AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 19 - Logins
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

-- INSERTING RECORDS: TABLE 16 - AcountActivities
  INSERT INTO AcountActivities(AccountActivity) 
  VALUES 
  ('ONLINE'),
  ('OFFLINE');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 17 - LoginActivities
  CREATE TABLE LoginActivities(
    LoginActivityID INT NOT NULL AUTO_INCREMENT,
    LoginDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    LogoutDateTime DATETIME,
    asAccountActivityID INT(3) NOT NULL,
    lLoginID INT NOT NULL,
    CONSTRAINT PK_LoginActivity PRIMARY KEY (LoginActivityID),
    CONSTRAINT FK_AA_AccountActivityID FOREIGN KEY (asAccountActivityID) REFERENCES AccountActivities(AccountActivityID),
    CONSTRAINT FK_L_LoginID FOREIGN KEY (lLoginID) REFERENCES Logins(LoginID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 17 - LoginActivities
  ALTER TABLE LoginActivityID AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 17 - LoginActivities
  INSERT INTO PostalCodes() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 18 - ForgotPasswords
  CREATE TABLE ForgotPasswords(
    RecoveryID INT NOT NULL AUTO_INCREMENT,
    PinCode INT(6) NOT NULL,
    CreatedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    lLoginID INT NOT NULL,
    CONSTRAINT PK_City PRIMARY KEY (CityID),
    CONSTRAINT FK_L_LoginID FOREIGN KEY (lLoginID) REFERENCES Logins(LoginID) 
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 18 - ForgotPasswords
  ALTER TABLE RecoveryID AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 18 - ForgotPasswords
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

-- INSERTING RECORDS: TABLE 19 - ReviewStatuses
  INSERT INTO ReviewStatuses(ReviewStatus) 
  VALUES 
  ('PENDING'),
  ('REVIEWED');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 20 - FeedbackReports
  CREATE TABLE FeedbackReports(
    ReportID INT NOT NULL AUTO_INCREMENT, 
    Subject VARCHAR(150) NOT NULL, 
    Feedback VARCHAR(250) NOT NULL, 
    rsReviewStatusID INT(3) DEFAULT 001, 
    SubmittedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'), 
    oForwardedByOperatorID INT(3), 
    oForwardedByAccountID INT, 
    oReviewedByOperatorID INT(3), 
    oReviewedByAccountID INT, 
    aReviewedByAdminID INT(3), 
    aReviewedByAccountID INT, 
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

-- INSERTING RECORDS: TABLE 20 - FeedbackReports
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

-- INSERTING RECORDS: TABLE 21 - SubmittedUserTypes
  INSERT INTO SubmittedUserTypes() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 22 - InternalFeedbackReports
  CREATE TABLE InternalFeedbackReports(
    InternalReportID INT NOT NULL AUTO_INCREMENT,
    frReportID INT NOT NULL,
    sutUserTypeID INT(3) NOT NULL,
    rpuPublishedRegisteredUserID INT (10),
    rpuPublishedAccountID INT,
    oPublishedOperatorID INT(3),
    oPublishedAccountID INT,
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

-- INSERTING RECORDS: TABLE 22 - InternalFeedbackReports
  INSERT INTO InternalFeedbackReports() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 23 - ExternalFeedbackReports
  CREATE TABLE ExternalFeedbackReports(
    ExternalReportID INT NOT NULL AUTO_INCREMENT,
    frReportID INT NOT NULL,
    AuthorReachableEmailAddress VARCHAR(150) NOT NULL,
    upuPublishedUnregisteredUserID INT NOT NULL,
    upuPublishedAccountID INT NOT NULL,
    CONSTRAINT PK_ExternalFeedbackReport PRIMARY KEY (ExternalReportID),
    CONSTRAINT FK_FR_ReportID FOREIGN KEY (frReportID) REFERENCES FeedbackReports(ReportID),  
    CONSTRAINT FK_UPU_PublishedUnregisteredUserID FOREIGN KEY (upuPublishedUnregisteredUserID) REFERENCES UnregisteredPublicUsers(UnregisteredUserID), 
    CONSTRAINT FK_UPU_PublishedAccountID FOREIGN KEY (upuPublishedAccountID) REFERENCES UnregisteredPublicUsers(aAccountID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 23 - ExternalFeedbackReports
  ALTER TABLE ExternalReportID AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 23 - ExternalFeedbackReports
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

-- INSERTING RECORDS: TABLE 24 - Symptoms
  INSERT INTO Symptoms() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 25 - HealthStatusReports
  CREATE TABLE HealthStatusReports(
    ReportID INT NOT NULL AUTO_INCREMENT,
    sSymptomID INT(3) NOT NULL,
    Message VARCHAR(150) NOT NULL,
    rsReviewStatusID INT(3) NOT NULL,
    SubmittedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'), 
    ProofOfTCRTest BLOB,
    upuPublishedUnregisteredUserID INT,
    upuPublishedAccountID INT,
    rpuPublishedRegisteredUserID INT,
    rpuPublishedAccountID INT, 
    oReviewedByOperatorID INT,
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

-- INSERTING RECORDS: TABLE 25 - HealthStatusReports
  INSERT INTO HealthStatusReports() 
  VALUES 
  ();



