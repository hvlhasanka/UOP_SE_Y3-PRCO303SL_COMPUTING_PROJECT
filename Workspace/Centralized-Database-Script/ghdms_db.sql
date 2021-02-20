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
  ALTER TABLE AccountTypes AUTO_INCREMENT = 001;

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
  ALTER TABLE Districts AUTO_INCREMENT = 001;

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
  ALTER TABLE AgeGroups AUTO_INCREMENT = 001;

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
  ALTER TABLE Genders AUTO_INCREMENT = 001;

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
    cCityID MEDIUMINT NOT NULL,
    pcPostalCodeID MEDIUMINT,
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
  ALTER TABLE UnregisteredPublicUsers AUTO_INCREMENT = 0000000001;

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
    cCityID MEDIUMINT NOT NULL,
    pcPostalCodeID MEDIUMINT,
    dDistrictID TINYINT NOT NULL,
    agAgeGroupID TINYINT,
    gGenderID TINYINT,
    CONSTRAINT PK_RegisteredPublicUser PRIMARY KEY (RegisteredUserID, aAccountID), 
    CONSTRAINT FK_A_AccountID FOREIGN KEY (aAccountID) REFERENCES Accounts(AccountID),
    CONSTRAINT FK_C_CityID FOREIGN KEY (cCityID) REFERENCES Cities(CityID),
    CONSTRAINT FK_PC_PostalCodeID FOREIGN KEY (psPostalCodeID) REFERENCES PostalCodes(PostalCodeID),
    CONSTRAINT FK_D_DistrictID FOREIGN KEY (dDistrictID) REFERENCES Districts(DistrictID),
    CONSTRAINT FK_AG_AgeGroupID FOREIGN KEY (agAgeGroupID) REFERENCES AgeGroups(AgeGroupID),
    CONSTRAINT FK_G_GenderID FOREIGN KEY (gGenderID) REFERENCES Genders(GenderID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 11 - RegisteredPublicUsers
  ALTER TABLE RegisteredPublicUsers AUTO_INCREMENT = 0000000001;

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
  ALTER TABLE Administrators AUTO_INCREMENT = 001;

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
  ALTER TABLE Operators AUTO_INCREMENT = 001; -- TODO : Checking highest value of mediumint

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
  ALTER TABLE SituationStatuses AUTO_INCREMENT = 001;
  
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
  ALTER TABLE ColourCodes AUTO_INCREMENT = 0000000001;

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
  ALTER TABLE AccountStatuses AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 18 - AccountStatuses
  INSERT INTO AccountStatuses(AccountStatus) 
  VALUES 
  ('Enabled'),
  ('Disabled');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 19 - Logins
  CREATE TABLE Logins(
    LoginID INT NOT NULL AUTO_INCREMENT,
    EmailAddress VARCHAR(250) NOT NULL UNIQUE,
    PasswordHash VARCHAR(150) NOT NULL,
    asAccountStatusID TINYINT NOT NULL,
    aAccountID INT NOT NULL,
    CONSTRAINT PK_Login PRIMARY KEY (LoginID),
    CONSTRAINT FK_AS_AccountStatusID FOREIGN KEY (asAccountStatusID) REFERENCES AccountStatuses(AccountStatusID),
    CONSTRAINT FK_A_AccountID FOREIGN KEY (aAccountID) REFERENCES Accounts(AccountID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 19 - Logins
  ALTER TABLE Logins AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 19 - Logins
  INSERT INTO Logins(EmailAddress, PasswordHash, asAccountStatusID, aAccountID) 
  VALUES 
  ('lucasanderson.ghd@gmail.com', '', 001, 0000000001), -- User Type: Administrator   |   Password:   
  ('andrewwilcom.ghd@gmail.com', '', 001, 0000000002), -- User Type: Operator   |   Password:           
  ('jackcooper24@gmail.com', '', 001, 0000000003); -- User Type: Registered Public User   |   Password:      

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 20 - AccountActivities
  CREATE TABLE AccountActivities(
    AccountActivityID TINYINT NOT NULL AUTO_INCREMENT,
    AccountActivity VARCHAR(10) NOT NULL,
    CONSTRAINT PK_AccountActivity PRIMARY KEY (AccountActivityID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 20 - AccountActivities
  ALTER TABLE AccountActivities AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 20 - AccountActivities
  INSERT INTO AccountActivities(AccountActivity) 
  VALUES 
  ('ONLINE'),
  ('OFFLINE');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 21 - LoginActivities
  CREATE TABLE LoginActivities(
    LoginActivityID INT NOT NULL AUTO_INCREMENT,
    LoginDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    LogoutDateTime DATETIME,
    asAccountActivityID TINYINT NOT NULL,
    lLoginID INT NOT NULL,
    CONSTRAINT PK_LoginActivity PRIMARY KEY (LoginActivityID),
    CONSTRAINT FK_AA_AccountActivityID FOREIGN KEY (asAccountActivityID) REFERENCES AccountActivities(AccountActivityID),
    CONSTRAINT FK_L_LoginID FOREIGN KEY (lLoginID) REFERENCES Logins(LoginID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 21 - LoginActivities
  ALTER TABLE LoginActivities AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 21 - LoginActivities
--   INSERT INTO LoginActivityID(asAccountActivityID, lLoginID) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 22 - ForgotPasswords
  CREATE TABLE ForgotPasswords(
    RecoveryID INT NOT NULL AUTO_INCREMENT,
    PinCode INT(6) NOT NULL,
    CreatedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    lLoginID INT NOT NULL,
    CONSTRAINT PK_City PRIMARY KEY (CityID),
    CONSTRAINT FK_L_LoginID FOREIGN KEY (lLoginID) REFERENCES Logins(LoginID) 
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 22 - ForgotPasswords
  ALTER TABLE ForgotPasswords AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 22 - ForgotPasswords
--   INSERT INTO ForgotPasswords() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 23 - ReviewStatuses
  CREATE TABLE ReviewStatuses(
    ReviewStatusID TINYINT NOT NULL AUTO_INCREMENT,
    ReviewStatus VARCHAR(10) NOT NULL,
    CONSTRAINT PK_ReviewStatus PRIMARY KEY (ReviewStatusID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 23 - ReviewStatuses
  ALTER TABLE ReviewStatuses AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 23 - ReviewStatuses
  INSERT INTO ReviewStatuses(ReviewStatus) 
  VALUES 
  ('PENDING'),
  ('REVIEWED');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 24 - FeedbackReports
  CREATE TABLE FeedbackReports(
    ReportID INT NOT NULL AUTO_INCREMENT, 
    ReportSubject VARCHAR(150) NOT NULL, 
    Feedback VARCHAR(300) NOT NULL, 
    rsReviewStatusID TINYINT DEFAULT 001, 
    SubmittedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'), 
    oForwardedByOperatorID MEDIUMINT, 
    oForwardedByAccountID INT, 
    oReviewedByOperatorID MEDIUMINT, 
    oReviewedByAccountID INT, 
    aReviewedByAdminID TINYINT, 
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

-- AUTO INCREMENT STARTING POINT: TABLE 24 - FeedbackReports
  ALTER TABLE FeedbackReports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 24 - FeedbackReports
--   INSERT INTO FeedbackReports() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 25 - SubmittedUserTypes
  CREATE TABLE SubmittedUserTypes(
    UserTypeID TINYINT NOT NULL AUTO_INCREMENT,
    UserType VARCHAR(100) NOT NULL,
    CONSTRAINT PK_UserTypeID PRIMARY KEY (UserTypeID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 25 - SubmittedUserTypes
  ALTER TABLE SubmittedUserTypes AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 25 - SubmittedUserTypes
  INSERT INTO SubmittedUserTypes() 
  VALUES 
  ('Operator'),
  ('Registered Public User'),
  ('Operator Forwarded Registered Public User');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 26 - InternalFeedbackReports
  CREATE TABLE InternalFeedbackReports(
    InternalReportID INT NOT NULL AUTO_INCREMENT,
    frReportID INT NOT NULL,
    sutUserTypeID TINYINT NOT NULL,
    rpuPublishedRegisteredUserID INT,
    rpuPublishedAccountID INT,
    oPublishedOperatorID MEDIUMINT,
    oPublishedAccountID INT,
    CONSTRAINT PK_InternalReportID PRIMARY KEY (InternalReportID),
    CONSTRAINT FK_FR_ReportID FOREIGN KEY (frReportID) REFERENCES FeedbackReports(ReportID), 
    CONSTRAINT FK_SUT_UserTypeID FOREIGN KEY (sutUserTypeID) REFERENCES SubmittedUserTypes(UserTypeID), 
    CONSTRAINT FK_RPU_PublishedRegisteredUserID FOREIGN KEY (rpuPublishedRegisteredUserID) REFERENCES UnregisteredPublicUsers(RegisteredUserID), 
    CONSTRAINT FK_RPU_PublishedAccountID FOREIGN KEY (rpuPublishedAccountID) REFERENCES UnregisteredPublicUsers(aAccountID), 
    CONSTRAINT FK_O_PublishedOperatorID FOREIGN KEY (oPublishedOperatorID) REFERENCES Operators(OperatorID), 
    CONSTRAINT FK_O_PublishedAccountID FOREIGN KEY (oPublishedAccountID) REFERENCES Operators(aAccountID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 26 - InternalFeedbackReports
  ALTER TABLE InternalFeedbackReports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 26 - InternalFeedbackReports
--   INSERT INTO InternalFeedbackReports() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 27 - ExternalFeedbackReports
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

-- AUTO INCREMENT STARTING POINT: TABLE 27 - ExternalFeedbackReports
  ALTER TABLE ExternalFeedbackReports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 27 - ExternalFeedbackReports
--   INSERT INTO ExternalFeedbackReports() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 25 - HealthStatusReports
  CREATE TABLE HealthStatusReports(
    ReportID INT NOT NULL AUTO_INCREMENT,
    ReportDescription VARCHAR(150) NOT NULL,
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
  ALTER TABLE HealthStatusReports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 25 - HealthStatusReports
  INSERT INTO HealthStatusReports() 
  VALUES 
  ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 29 - Symptoms
  CREATE TABLE Symptoms(
    SymptomsID MEDIUMINT NOT NULL AUTO_INCREMENT,
    Symptom VARCHAR(150) NOT NULL,
    SymptomCategory VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Symptom PRIMARY KEY (SymptomsID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 29 - Symptoms
  ALTER TABLE Symptoms AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 29 - Symptoms
  INSERT INTO Symptoms(Symtom, SymptomCategory) 
  VALUES 
  ('Fewer', 'Common Symptom'),
  ('Dry cough', 'Common Symptom'),
  ('Tiredness', 'Common Symptom'),
  ('Headache', 'Rare Symptom'),
  ('Aches and pains', 'Rare Symptom'),
  ('Sore throat', 'Rare Symptom'),
  ('Diarrhoea', 'Rare Symptom'),
  ('Conjunctivitis', 'Rare Symptom'),
  ('Loss of taste and smell', 'Rare Symptom'),
  ('A rash on skin (Discolouration of fingers and toes)', 'Rare Symptom'),
  ('Chest pain (Or pressure)', 'Severe Symptom'),
  ('Loss of speech and movement', 'Severe Symptom'),
  ('Difficulty breathing or short of breath', 'Severe Symptom');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 30 - HealthStatusReportSymptoms
  CREATE TABLE HealthStatusReportSymptoms(
    hsrReportID INT NOT NULL,
    sSymptomID MEDIUMINT NOT NULL,
    CONSTRAINT PK_HealthStatusReportSymptom PRIMARY KEY (hsrReportID, sSymptomID),
    CONSTRAINT FK_HS_ReportID FOREIGN KEY (hsrReportID) REFERENCES HealthStatusReports(ReportID),
    CONSTRAINT FK_S_SymptomID FOREIGN KEY (sSymptomID) REFERENCES Symptoms(SymptomID)
  )ENGINE=INNODB;

-- INSERTING RECORDS: TABLE 30 - HealthStatusReportSymptoms
--   INSERT INTO HealthStatusReportSymptoms(hsrReportID, sSymptomID) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 31 - StandardHealthStatusReports
  CREATE TABLE StandardHealthStatusReports(
	StandardReportID INT NOT NULL AUTO_INCREMENT,
    hsrReportID INT NOT NULL,
    CONSTRAINT PK_StandardHealthStatusReport PRIMARY KEY (StandardReportID, hsrReportID),
    CONSTRAINT FK_HSR_ReportID FOREIGN KEY (hsrReportID) REFERENCES HealthStatusReports(ReportID)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 31 - StandardHealthStatusReports
  ALTER TABLE StandardHealthStatusReports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 31 - StandardHealthStatusReports
--   INSERT INTO StandardHealthStatusReports(StandardReportID, hsrReportID) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 32 - ReportTypes
  CREATE TABLE ReportTypes(
	ReportTypeID TINYINT NOT NULL AUTO_INCREMENT,
    ReportType VARCHAR(100) NOT NULL,
    CONSTRAINT PK_ReportType PRIMARY KEY (ReportTypeID)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 32 - ReportTypes
  ALTER TABLE ReportTypes AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 32 - ReportTypes
  INSERT INTO ReportTypes(ReportType) 
  VALUES 
  ('Enduring Severe Symptoms'),
  ('PCR Test Disease Positive');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 33 - EmergencyHealthStatusReports
  CREATE TABLE EmergencyHealthStatusReports(
	EmergencyReportID INT NOT NULL AUTO_INCREMENT,
    hsrReportID INT NOT NULL,
    rtReportTypeID TINYINT NOT NULL,
    sSeverityID TINYINT NOT NULL,
    CONSTRAINT PK_EmergencyHealthStatusReport PRIMARY KEY (EmergencyReportID),
    CONSTRAINT FK_HSR_ReportID FOREIGN KEY (hsrReportID) REFERENCES HealthStatusReports(ReportID),
    CONSTRAINT FK_RT_ReportTypeID FOREIGN KEY (rtReportTypeID) REFERENCES ReportTypes(ReportTypeID),
    CONSTRAINT FK_S_SeverityID FOREIGN KEY (sSeverityID) REFERENCES Severities(SeverityID)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 33 - EmergencyHealthStatusReports
  ALTER TABLE EmergencyHealthStatusReports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 33 - EmergencyHealthStatusReports
--   INSERT INTO EmergencyHealthStatusReport(hsrReportID, rtReportTypeID, sSeverityID) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 34 - Responses
  CREATE TABLE Responses(
	ReponseID INT NOT NULL AUTO_INCREMENT,
    Message VARCHAR(250) NOT NULL,
    lSentExistingEmailAddress VARCHAR(250),
    efrSentReachableEmailAddress VARCHAR(250),
    SentDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'), 
    frReportID INT,
    hsrReportID INT,
    CONSTRAINT PK_Response PRIMARY KEY (ReponseID),
    CONSTRAINT FK_L_SentExistingEmailAddress FOREIGN KEY (lSentExistingEmailAddress) REFERENCES Logins(EmailAddress),
	CONSTRAINT FK_EFR_SentReachableEmailAddress FOREIGN KEY (lSentExistingEmailAddress) REFERENCES ExternalFeedbackReports(AuthorReachableEmailAddress),
	CONSTRAINT FK_FR_ReportID FOREIGN KEY (frReportID) REFERENCES FeedbackReports(ReportID),
    CONSTRAINT FK_HSR_ReportID FOREIGN KEY (hsrReportID) REFERENCES HealthStatusReports(ReportID)
  )ENGINE=INNODB;
  
  -- AUTO INCREMENT STARTING POINT: TABLE 34 - Responses
  ALTER TABLE Responses AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 34 - Responses
--   INSERT INTO Responses(Message, lSentExistingEmailAddress, frReportID) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 35 - HealthDetailCategories
  CREATE TABLE HealthDetailCategories(
    CategoryID TINYINT NOT NULL AUTO_INCREMENT,
    Category VARCHAR(100) NOT NULL,
    CONSTRAINT PK_HealthDetailCategory PRIMARY KEY (CategoryID)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 35 - HealthDetailCategories
  ALTER TABLE HealthDetailCategories AUTO_INCREMENT = 001;
  
-- INSERTING RECORDS: TABLE 35 - HealthDetailCategories
  INSERT INTO HealthDetailCategories(Category) 
  VALUES 
  ('Health Guidelines'),
  ('Curfew Announcement');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 36 - HealthDetails
  CREATE TABLE HealthDetails(
    HealthDetailID INT NOT NULL AUTO_INCREMENT,
    HealthDetailHeading VARCHAR(150) NOT NULL,
    HealthDetailPassage VARCHAR(250),
    hdcCategoryID TINYINT NOT NULL,
    LastEditDateTime DATETIME ON UPDATE convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    oLastEditByOperatorID INT,
    oLastEditByAccountID INT,
    PublishedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'), 
    oPublishedOperatorID INT NOT NULL,
    oPublishedAccountID INT NOT NULL,
    CONSTRAINT PK_HealthDetail PRIMARY KEY (HealthDetailID),
    CONSTRAINT FK_HDC_CategoryID FOREIGN KEY (hdcCategoryID) REFERENCES HealthDetailCategories(CategoryID),
    CONSTRAINT FK_O_LastEditByOperatorID FOREIGN KEY (oLastEditByOperatorID) REFERENCES Operators(OperatorID),
    CONSTRAINT FK_O_LastEditByAccountID FOREIGN KEY (oLastEditByAccountID) REFERENCES Operators(AccountID),
    CONSTRAINT FK_O_PublishedOperatorID FOREIGN KEY (oPublishedOperatorID) REFERENCES Operators(OperatorID),
    CONSTRAINT FK_O_PublishedAccountID FOREIGN KEY (oPublishedAccountID) REFERENCES Operators(AccountID)
  )ENGINE=INNODB;
  
  -- AUTO INCREMENT STARTING POINT: TABLE 36 - HealthDetails
  ALTER TABLE HealthDetails AUTO_INCREMENT = 0000000001;
  
-- INSERTING RECORDS: TABLE 36 - HealthDetails
--   INSERT INTO HealthDetails(HealthDetailHeading, HealthDetailPassage, hdcCategoryID, oPublishedOperatorID, oPublishedAccountID) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 37 - HealthDetailTexts
  CREATE TABLE HealthDetailTexts(
    TextID INT NOT NULL AUTO_INCREMENT,
    TextHeading VARCHAR(150) NOT NULL,
    DetailText VARCHAR(250) NOT NULL,
    TextSectionSequenceNumber INT NOT NULL,
    hdHealthDetailID INT NOT NULL,
    CONSTRAINT PK_HealthDetailText PRIMARY KEY (TextID),
    CONSTRAINT FK_HD_HealthDetailID FOREIGN KEY (hdHealthDetailID) REFERENCES HealthDetails(HealthDetailID)
  )ENGINE=INNODB;
  
  -- AUTO INCREMENT STARTING POINT: TABLE 37 - HealthDetailTexts
  ALTER TABLE HealthDetailTexts AUTO_INCREMENT = 0000000001;
  
-- INSERTING RECORDS: TABLE 37 - HealthDetailTexts
--   INSERT INTO HealthDetailTexts(TextHeading, DetailText, TextSectionSequenceNumber, hdHealthDetailID) 
--   VALUES 
--   ();
  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 38 - HotZoneCategories
  CREATE TABLE HotZoneCategories(
    CategoryID TINYINT NOT NULL AUTO_INCREMENT,
    Category VARCHAR(150) NOT NULL,
    CONSTRAINT PK_HotZoneCategory PRIMARY KEY (CategoryID)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 38 - HotZoneCategories
  ALTER TABLE HotZoneCategories AUTO_INCREMENT = 001;
  
-- INSERTING RECORDS: TABLE 38 - HotZoneCategories
--   INSERT INTO HotZoneCategories(Category) 
--   VALUES 
--   ('');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 39 - HotZoneLocations
  CREATE TABLE HotZoneLocations(
    LocationID INT NOT NULL AUTO_INCREMENT,
    ZoneName VARCHAR(150) NOT NULL,
    hzcCategoryID VARCHAR(250),
    sSeverityID TINYINT NOT NULL,
    LastEditDateTime DATETIME ON UPDATE convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'),
    oLastEditByOperatorID INT, 
    oLastEditByAccountID INT,
    PublishedDateTime DATETIME DEFAULT convert_tz(UTC_TIMESTAMP,'+00:00','+05:30'), 
    oPublishedOperatorID INT NOT NULL,
    oPublishedAccountID INT NOT NULL,
    CONSTRAINT PK_HotZoneLocation PRIMARY KEY (LocationID),
    CONSTRAINT FK_HZL_CategoryID FOREIGN KEY (hzcCategoryID) REFERENCES HotZoneCategories(CategoryID),
    CONSTRAINT FK_S_SeverityID FOREIGN KEY (sSeverityID) REFERENCES Severities(SeverityID),
    CONSTRAINT FK_O_LastEditByOperatorID FOREIGN KEY (oLastEditByOperatorID) REFERENCES Operators(OperatorID),
    CONSTRAINT FK_O_LastEditByAccountID FOREIGN KEY (oLastEditByAccountID) REFERENCES Operators(AccountID),
    CONSTRAINT FK_O_PublishedOperatorID FOREIGN KEY (oPublishedOperatorID) REFERENCES Operators(OperatorID),
    CONSTRAINT FK_O_PublishedAccountID FOREIGN KEY (oPublishedAccountID) REFERENCES Operators(AccountID)
  )ENGINE=INNODB;
  
  -- AUTO INCREMENT STARTING POINT: TABLE 39 - HotZoneLocations
  ALTER TABLE HotZoneLocations AUTO_INCREMENT = 0000000001;
  
-- INSERTING RECORDS: TABLE 39 - HotZoneLocations
--   INSERT INTO HotZoneLocations(ZoneName, hzcCategoryID, sSeverityID, oPublishedOperatorID, oPublishedAccountID) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 40 - HotZoneLocationLatitudes
  CREATE TABLE HotZoneLocationLatitudes(
    hzlLocationID INT NOT NULL,
    Latitude FLOAT NOT NULL,
    SequenceOrder INT NOT NULL,
    CONSTRAINT PK_HotZoneLocationLatitude PRIMARY KEY (hzlLocationID, Latitude),
    CONSTRAINT FK_HZL_hzlLocationID FOREIGN KEY (hzlLocationID) REFERENCES HotZoneLocations(LocationID)
  )ENGINE=INNODB;
  
-- INSERTING RECORDS: TABLE 40 - HotZoneLocationLatitudes
--   INSERT INTO HotZoneLocationLatitudes(hzlLocationID, Latitude, SequenceOrder,) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 41 - HotZoneLocationLongitudes
  CREATE TABLE HotZoneLocationLongitudes(
    hzlLocationID INT NOT NULL,
    Longitude FLOAT NOT NULL,
    SequenceOrder INT NOT NULL,
    CONSTRAINT PK_HotZoneLocationLongitude PRIMARY KEY (hzlLocationID, Longitude),
    CONSTRAINT FK_HZL_hzlLocationID FOREIGN KEY (hzlLocationID) REFERENCES HotZoneLocations(LocationID)
  )ENGINE=INNODB;
  
-- INSERTING RECORDS: TABLE 41 - HotZoneLocationLongitudes
--   INSERT INTO HotZoneLocationLongitudes(hzlLocationID, Latitude, SequenceOrder,) 
--   VALUES 
--   ();
