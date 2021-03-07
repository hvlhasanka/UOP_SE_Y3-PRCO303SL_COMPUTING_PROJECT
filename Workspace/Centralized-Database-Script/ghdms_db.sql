-- Database Name: ghds_db
-- Database Name Abbreviation Long Form: Goverment Health Department Management System (GHDS) Database (DB)

-- All timestamps should be queried using, convert_tz(UTC_TIMESTAMP,'+00:00','+05:30') timezone

-- Deletes if a database named ghdms_db already exists
  DROP DATABASE IF EXISTS ghdms_db;

-- Creating database
  CREATE DATABASE ghdms_db;

-- |------------------------------------------------------------------------------------------------|

-- Accessing newly created database
  USE ghdms_db;

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 1 - name_prefixes
  CREATE TABLE name_prefixes(
    name_prefix_id TINYINT NOT NULL AUTO_INCREMENT,
    name_prefix VARCHAR(8) NOT NULL,
    CONSTRAINT pk_name_prefix PRIMARY KEY (name_prefix_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 1 - name_prefixes
  ALTER TABLE name_prefixes AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 1 - name_prefixes
  INSERT INTO name_prefixes(name_prefix)  
  VALUES
  ("Sir."),
  ("Mr."),
  ("Miss."),
  ("Ms."),
  ("Mrs."),
  ("Dr.");

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 2 - account_types
  CREATE TABLE account_types(
    account_type_id TINYINT NOT NULL AUTO_INCREMENT,
    account_type VARCHAR(30) NOT NULL,
    CONSTRAINT pk_account_type PRIMARY KEY (account_type_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 2 - account_types
  ALTER TABLE account_types AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 2 - account_types
  INSERT INTO account_types(account_type)
  VALUES 
  ('Administrator'),
  ('Operator'),
  ('Registered Public User'),
  ('Unregistered Public User');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 3 - accounts
  CREATE TABLE accounts(
    account_id INT NOT NULL AUTO_INCREMENT,
    np_name_prefix_id TINYINT NOT NULL,
    first_name VARCHAR(90) NOT NULL,
    middle_name VARCHAR(90),
    last_name VARCHAR(150) NOT NULL,
    at_account_type_id TINYINT NOT NULL,
    last_edit_date_time DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_account PRIMARY KEY (account_id),
    CONSTRAINT fk_np_a_name_prefix_id FOREIGN KEY (np_name_prefix_id) REFERENCES name_prefixes(name_prefix_id),
    CONSTRAINT fk_at_a_account_type_id FOREIGN KEY (at_account_type_id) REFERENCES account_types(account_type_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 3 - accounts
  ALTER TABLE accounts AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 3 - accounts
  INSERT INTO accounts(np_name_prefix_id, first_name, middle_name, last_name, at_account_type_id)
  VALUES 
  (001, 'Lucas', 'Andy', 'Anderson', 001),
  (002, 'Andrew', '', 'Wilson', 002),
  (003, 'Jack', 'Sammy', 'Cooper', 003),
  (004, 'Sarah', 'Sam', 'Wellington', 004);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 4 - account_phone_numbers
  CREATE TABLE account_phone_numbers(
    a_account_id INT NOT NULL,
    phone_number CHAR(12) NOT NULL,
    CONSTRAINT pk_account_phone_number PRIMARY KEY (a_account_id, phone_number),
    CONSTRAINT fk_a_apn_account_id FOREIGN KEY (a_account_id) REFERENCES accounts(account_id)
  )ENGINE=INNODB;

-- INSERTING RECORDS: TABLE 4 - account_phone_numbers
  INSERT INTO account_phone_numbers(a_account_id, phone_number)
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

-- CREATING TABLE: TABLE 5 - cities
  CREATE TABLE cities(
    city_id INT NOT NULL AUTO_INCREMENT,
    city VARCHAR(200) NOT NULL,
    CONSTRAINT pk_city PRIMARY KEY (city_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 5 - cities
  ALTER TABLE cities AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 5 - cities
  INSERT INTO cities(city) 
  VALUES 
  ('Pettah'),
  ('FORT'),
  ('Borrella'),
  ('Kollupitiya');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 6 - postal_codes
  CREATE TABLE postal_codes(
    postal_code_id INT NOT NULL AUTO_INCREMENT,
    postal_code VARCHAR(10) NOT NULL,
    CONSTRAINT pk_postal_code PRIMARY KEY (postal_code_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 6 - postal_codes
  ALTER TABLE postal_codes AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 6 - postal_codes
  INSERT INTO postal_codes(postal_code) 
  VALUES 
  ('34115'),
  ('45563'),
  ('43886'),
  ('86433');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 7 - districts
  CREATE TABLE districts(
    district_id TINYINT NOT NULL AUTO_INCREMENT,
    district VARCHAR(100) NOT NULL, 
    CONSTRAINT pk_district PRIMARY KEY (district_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 7 - districts
  ALTER TABLE districts AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 7 - districts
  INSERT INTO districts(district) 
  VALUES 
  ('Colombo');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 8 - age_groups
  CREATE TABLE age_groups(
    age_group_id TINYINT NOT NULL AUTO_INCREMENT,
    age_group VARCHAR(20) NOT NULL,
    CONSTRAINT pk_age_group PRIMARY KEY (age_group_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 8 - age_groups
  ALTER TABLE age_groups AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 8 - age_groups
  INSERT INTO age_groups(age_group) 
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

-- CREATING TABLE: TABLE 9 - genders
  CREATE TABLE genders(
    gender_id TINYINT NOT NULL AUTO_INCREMENT,
    gender VARCHAR(20) NOT NULL,
    CONSTRAINT pk_gender PRIMARY KEY (gender_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 9 - genders
  ALTER TABLE genders AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 9 - genders
  INSERT INTO genders(gender) 
  VALUES 
  ('Male'),
  ('Female'),
  ('Other'),
  ('Rather Not Mention');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 10 - unregistered_public_users
  CREATE TABLE unregistered_public_users(
    unregistered_user_id INT NOT NULL AUTO_INCREMENT,
    a_account_id INT NOT NULL,
    nic VARCHAR(12) NOT NULL,
    passport_no VARCHAR(15) NOT NULL,
    street_address VARCHAR(120),
    c_city_id INT NOT NULL,
    pc_postal_code_id INT,
    d_district_id TINYINT NOT NULL,
    ag_age_group_id TINYINT,
    g_gender_id TINYINT,
    CONSTRAINT pk_unregistered_public_user PRIMARY KEY (unregistered_user_id, a_account_id), 
    CONSTRAINT fk_a_upu_account_id FOREIGN KEY (a_account_id) REFERENCES accounts(account_id),
    CONSTRAINT fk_c_upu_city_id FOREIGN KEY (c_city_id) REFERENCES cities(city_id),
    CONSTRAINT fk_pc_upu_postal_code_id FOREIGN KEY (pc_postal_code_id) REFERENCES postal_codes(postal_code_id),
    CONSTRAINT fk_d_upu_district_id FOREIGN KEY (d_district_id) REFERENCES districts(district_id),
    CONSTRAINT fk_ag_upu_age_group_id FOREIGN KEY (ag_age_group_id) REFERENCES age_groups(age_group_id),
    CONSTRAINT fk_g_upu_gender_id FOREIGN KEY (g_gender_id) REFERENCES genders(gender_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 10 - unregistered_public_users
  ALTER TABLE unregistered_public_users AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 10 - unregistered_public_users
  INSERT INTO unregistered_public_users(a_account_id, nic, passport_no, street_address, c_city_id, pc_postal_code_id, d_district_id, ag_age_group_id, g_gender_id) 
  VALUES 
  (0000000004, '437523543215', '352465342365346', 'No. 332, Castle Side Street', 0000000001, 0000000002, 001, 005, 001);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 11 - registered_public_users
  CREATE TABLE registered_public_users(
    registered_user_id INT NOT NULL AUTO_INCREMENT,
    a_account_id INT NOT NULL,
    nic VARCHAR(12) NOT NULL,
    passport_no VARCHAR(15) NOT NULL,
    street_address VARCHAR(120),
    c_city_id INT NOT NULL,
    pc_postal_code_id INT,
    d_district_id TINYINT NOT NULL,
    ag_age_group_id TINYINT,
    g_gender_id TINYINT,
    CONSTRAINT pk_unregistered_public_user PRIMARY KEY (registered_user_id, a_account_id), 
    CONSTRAINT fk_a_rpu_account_id FOREIGN KEY (a_account_id) REFERENCES accounts(account_id),
    CONSTRAINT fk_c_rpu_city_id FOREIGN KEY (c_city_id) REFERENCES cities(city_id),
    CONSTRAINT fk_pc_rpu_postal_code_id FOREIGN KEY (pc_postal_code_id) REFERENCES postal_codes(postal_code_id),
    CONSTRAINT fk_d_rpu_district_id FOREIGN KEY (d_district_id) REFERENCES districts(district_id),
    CONSTRAINT fk_ag_rpu_age_group_id FOREIGN KEY (ag_age_group_id) REFERENCES age_groups(age_group_id),
    CONSTRAINT fk_g_rpu_gender_id FOREIGN KEY (g_gender_id) REFERENCES genders(gender_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 11 - registered_public_users
  ALTER TABLE registered_public_users AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 11 - registered_public_users
  INSERT INTO registered_public_users(a_account_id, nic, passport_no, street_address, c_city_id, pc_postal_code_id, d_district_id, ag_age_group_id, g_gender_id) 
  VALUES 
  (0000000003, '658634568235', '368904532456497', 'No. 423, Beach Side Street', 0000000001, 0000000002, 001, 008, 001);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 12 - administrators
  CREATE TABLE administrators(
    admin_id TINYINT NOT NULL AUTO_INCREMENT,
    a_account_id INT NOT NULL,
    a_registered_by_admin_id TINYINT,
    CONSTRAINT pk_administrator PRIMARY KEY (admin_id, a_account_id),
	CONSTRAINT fk_a_a_admin_id FOREIGN KEY (a_registered_by_admin_id) REFERENCES administrators(admin_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 12 - administrators
  ALTER TABLE administrators AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 12 - administrators
  INSERT INTO administrators(a_account_id, a_registered_by_admin_id) 
  VALUES 
  (0000000001, 001);
  
-- UPDATING TABLE WITH FOREIGN KEY: Table 12 - administrators
 -- ALTER TABLE administrators ADD CONSTRAINT fk_a_a_admin_id FOREIGN KEY (a_registered_by_admin_id) 
--  REFERENCES administrators(admin_id);
  
-- INSERTING VALUE INTO UPDATED COLUMN: Table 12 - administrators
 -- UPDATE administrators SET a_registered_by_adminID = 001
 -- WHERE admin_id = 001;

  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 13 - operators
  CREATE TABLE operators(
    operator_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    a_account_id INT NOT NULL,
    a_registered_by_admin_id TINYINT NOT NULL,
    CONSTRAINT pk_operator PRIMARY KEY (operator_id, a_account_id),
    CONSTRAINT fk_a_o_account_id FOREIGN KEY (a_account_id) REFERENCES accounts(account_id),
    CONSTRAINT fk_a_o_admin_id FOREIGN KEY (a_registered_by_admin_id) REFERENCES administrators(admin_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 13 - operators
  ALTER TABLE operators AUTO_INCREMENT = 0000001;

-- INSERTING RECORDS: TABLE 13 - operators
  INSERT INTO operators(a_account_id, a_registered_by_admin_id) 
  VALUES 
  (0000000002, 001);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 14 - situation_statuses
  CREATE TABLE situation_statuses(
	situation_status_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    situation_status VARCHAR(150) NOT NULL,
    CONSTRAINT pk_situation_statuses PRIMARY KEY (situation_status_id)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 14 - situation_statuses
  ALTER TABLE situation_statuses AUTO_INCREMENT = 0000001;
  
-- INSERTING RECORDS: TABLE 14 - situation_statuses
  INSERT INTO situation_statuses(situation_status) 
  VALUES
  ('Positive Cases Rising'),
  ('Country in Full Lockdown');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 15 - colour_codes
  CREATE TABLE colour_codes(
    colour_code_id INT NOT NULL AUTO_INCREMENT,
    colour_code VARCHAR(25) NOT NULL,
    CONSTRAINT pk_colour_codes PRIMARY KEY (colour_code_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 15 - colour_codes
  ALTER TABLE colour_codes AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 15 - colour_codes
  INSERT INTO colour_codes(colour_code) 
  VALUES 
  ('#ffffff'),
  ('#1be769'),
  ('#fffb0a'),
  ('#ce3d3d');
  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 16 - severities
  CREATE TABLE severities(
	severity_id TINYINT NOT NULL AUTO_INCREMENT,
    severity VARCHAR(50) NOT NULL,
    CONSTRAINT pk_severity PRIMARY KEY (severity_id)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 16 - severities
  ALTER TABLE severities AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 16 - severities
  INSERT INTO severities(severity) 
  VALUES 
  ('MINIMAL AFFECT'),
  ('LOW'),
  ('MEDIUM'),
  ('HIGH'),
  ('CRITICAL');
  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 17 - country_statuses
  CREATE TABLE country_statuses(
    country_status_id INT NOT NULL AUTO_INCREMENT,
    ss_situation_status_id MEDIUMINT NOT NULL,
    s_severity_id TINYINT NOT NULL,
    cc_colour_code_id INT NOT NULL,
    current_country_status BOOLEAN NOT NULL,
    CONSTRAINT pk_country_status_id PRIMARY KEY (country_status_id),
    CONSTRAINT fk_ss_cs_sitation_status_id FOREIGN KEY (ss_situation_status_id) REFERENCES situation_statuses(situation_status_id),
    CONSTRAINT fk_s_cs_severity_id FOREIGN KEY (s_severity_id) REFERENCES severities(severity_id),
    CONSTRAINT fk_cc_cs_colour_code_id FOREIGN KEY (cc_colour_code_id) REFERENCES colour_codes(colour_code_id)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 17 - country_statuses
  ALTER TABLE country_statuses AUTO_INCREMENT = 0000000001;
  
-- INSERTING RECORDS: TABLE 17 - country_statuses
  INSERT INTO country_statuses(ss_situation_status_id, s_severity_id, cc_colour_code_id, current_country_status)
  VALUES 
  (001, 001, 0000000001, 0),
  (002, 002, 0000000002, 1);

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 18 - account_statuses
  CREATE TABLE account_statuses(
    account_status_id TINYINT NOT NULL AUTO_INCREMENT,
    account_status VARCHAR(10) NOT NULL,
    CONSTRAINT pk_account_status PRIMARY KEY (account_status_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 18 - account_statuses
  ALTER TABLE account_statuses AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 18 - account_statuses
  INSERT INTO account_statuses(account_status) 
  VALUES 
  ('Enabled'),
  ('Disabled');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 19 - logins
  CREATE TABLE logins(
    login_id INT NOT NULL AUTO_INCREMENT,
    email_address VARCHAR(250) NOT NULL UNIQUE,
    password_hash VARCHAR(150) NOT NULL,
    as_account_status_id TINYINT NOT NULL,
    a_account_id INT NOT NULL,
    CONSTRAINT pk_login PRIMARY KEY (login_id),
    CONSTRAINT fk_as_l_account_status_id FOREIGN KEY (as_account_status_id) REFERENCES account_statuses(account_status_id),
    CONSTRAINT fk_a_l_account_id FOREIGN KEY (a_account_id) REFERENCES accounts(account_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 19 - logins
  ALTER TABLE logins AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 19 - logins
  INSERT INTO logins(email_address, password_hash, as_account_status_id, a_account_id) 
  VALUES 
  ('lucasanderson.ghd@gmail.com', '', 001, 0000000001), -- User Type: Administrator   |   Password:   
  ('andrewwilcom.ghd@gmail.com', '', 001, 0000000002), -- User Type: Operator   |   Password:           
  ('jackcooper24@gmail.com', '', 001, 0000000003); -- User Type: Registered Public User   |   Password:      

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 20 - account_activities
  CREATE TABLE account_activities(
    account_activity_id TINYINT NOT NULL AUTO_INCREMENT,
    account_activity VARCHAR(10) NOT NULL,
    CONSTRAINT pk_account_activity PRIMARY KEY (account_activity_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 20 - account_activities
  ALTER TABLE account_activities AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 20 - account_activities
  INSERT INTO account_activities(account_activity) 
  VALUES 
  ('ONLINE'),
  ('OFFLINE');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 21 - login_activities
  CREATE TABLE login_activities(
    login_activity_id INT NOT NULL AUTO_INCREMENT,
    login_date_time DATETIME DEFAULT current_timestamp,
    logout_date_time DATETIME,
    as_account_activity_id TINYINT NOT NULL,
    l_login_id INT NOT NULL,
    CONSTRAINT pk_login_activity PRIMARY KEY (login_activity_id),
    CONSTRAINT fk_aa_la_account_activity_id FOREIGN KEY (as_account_activity_id) REFERENCES account_activities(account_activity_id),
    CONSTRAINT fk_l_la_login_id FOREIGN KEY (l_login_id) REFERENCES logins(login_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 21 - login_activities
  ALTER TABLE login_activities AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 21 - login_activities
--   INSERT INTO login_activities(as_account_activity_id, l_login_id) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 22 - forgot_passwords
  CREATE TABLE forgot_passwords(
    recovery_id INT NOT NULL AUTO_INCREMENT,
    pin_code MEDIUMINT NOT NULL,
    created_date_time DATETIME DEFAULT current_timestamp,
    l_login_id INT NOT NULL,
    CONSTRAINT pk_forgot_password PRIMARY KEY (recovery_id),
    CONSTRAINT fk_l_lp_login_id FOREIGN KEY (l_login_id) REFERENCES Logins(login_id) 
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 22 - forgot_passwords
  ALTER TABLE forgot_passwords AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 22 - forgot_passwords
--   INSERT INTO forgot_passwords() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 23 - review_statuses
  CREATE TABLE review_statuses(
    review_status_id TINYINT NOT NULL AUTO_INCREMENT,
    review_status VARCHAR(10) NOT NULL,
    CONSTRAINT pk_review_status PRIMARY KEY (review_status_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 23 - review_statuses
  ALTER TABLE review_statuses AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 23 - review_statuses
  INSERT INTO review_statuses(review_status) 
  VALUES 
  ('PENDING'),
  ('REVIEWED');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 24 - feedback_reports
  CREATE TABLE feedback_reports(
    report_id INT NOT NULL AUTO_INCREMENT, 
    report_subject VARCHAR(150) NOT NULL, 
    feedback VARCHAR(300) NOT NULL, 
    rs_review_status_id TINYINT DEFAULT 001, 
    submitted_date_time DATETIME DEFAULT current_timestamp, 
    o_forwarded_by_operator_id MEDIUMINT, 
    o_forwarded_by_account_id INT, 
    o_reviewed_by_operator_id MEDIUMINT, 
    o_reviewed_by_account_id INT, 
    a_reviewed_by_admin_id TINYINT, 
    a_reviewed_by_account_id INT, 
    CONSTRAINT pk_feedback_report PRIMARY KEY (report_id), 
    CONSTRAINT fk_rs_fr_review_status_id FOREIGN KEY (rs_review_status_id) REFERENCES review_statuses(review_status_id), 
    CONSTRAINT fk_o_fr_forwarded_by_opertor_id FOREIGN KEY (o_forwarded_by_operator_id) REFERENCES operators(operator_id), 
    CONSTRAINT fk_o_fr_forwarded_by_account_id FOREIGN KEY (o_forwarded_by_account_id) REFERENCES operators(a_account_id), 
    CONSTRAINT fk_o_fr_reviewed_by_operator_id FOREIGN KEY (o_reviewed_by_operator_id) REFERENCES operators(operator_id), 
    CONSTRAINT fk_o_fr_reviewed_by_account_id FOREIGN KEY (o_reviewed_by_account_id) REFERENCES operators(a_account_id), 
    CONSTRAINT fk_a_fr_reviewed_by_admin_id FOREIGN KEY (a_reviewed_by_admin_id) REFERENCES administrators(admin_id), 
    CONSTRAINT fk_a_fr_reviewed_by_account_id FOREIGN KEY (a_reviewed_by_account_id) REFERENCES operators(a_account_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 24 - feedback_reports
  ALTER TABLE feedback_reports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 24 - feedback_reports
--   INSERT INTO feedback_reports() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 25 - submitted_user_types
  CREATE TABLE submitted_user_types(
    user_type_id TINYINT NOT NULL AUTO_INCREMENT,
    user_type VARCHAR(100) NOT NULL,
    CONSTRAINT pk_user_type_id PRIMARY KEY (user_type_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 25 - submitted_user_types
  ALTER TABLE submitted_user_types AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 25 - submitted_user_types
  INSERT INTO submitted_user_types(user_type) 
  VALUES 
  ('Operator'),
  ('Registered Public User'),
  ('Operator Forwarded Registered Public User');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 26 - internal_feedback_reports
  CREATE TABLE internal_feedback_reports(
    internal_report_id INT NOT NULL AUTO_INCREMENT,
    fr_report_id INT NOT NULL,
    sut_user_type_id TINYINT NOT NULL,
    rpu_published_registered_user_id INT,
    rpu_published_account_id INT,
    o_published_operator_id MEDIUMINT,
    o_published_account_id INT,
    CONSTRAINT pk_internal_reportID PRIMARY KEY (internal_report_id),
    CONSTRAINT fk_fr_ifr_report_id FOREIGN KEY (fr_report_id) REFERENCES feedback_reports(report_id), 
    CONSTRAINT fk_sut_ifr_user_type_id FOREIGN KEY (sut_user_type_id) REFERENCES submitted_user_types(user_type_id), 
    CONSTRAINT fk_rpu_ifr_published_registered_user_id FOREIGN KEY (rpu_published_registered_user_id) REFERENCES registered_public_users(registered_user_id), 
    CONSTRAINT fk_rpu_ifr_publishedAccount_id FOREIGN KEY (rpu_published_account_id) REFERENCES unregistered_public_users(a_account_id), 
    CONSTRAINT fk_o_ifr_published_operator_id FOREIGN KEY (o_published_operator_id) REFERENCES operators(operator_id), 
    CONSTRAINT fk_o_ifr_published_account_id FOREIGN KEY (o_published_account_id) REFERENCES operators(a_account_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 26 - internal_feedback_reports
  ALTER TABLE internal_feedback_reports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 26 - internal_feedback_reports
--   INSERT INTO internal_feedback_reports() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 27 - external_feedback_reports
  CREATE TABLE external_feedback_reports(
    external_report_id INT NOT NULL AUTO_INCREMENT,
    fr_report_id INT NOT NULL,
    author_reachable_email_address VARCHAR(250) NOT NULL,
    upu_published_unregistered_user_id INT NOT NULL,
    upu_published_account_id INT NOT NULL,
    CONSTRAINT pk_external_feedback_report PRIMARY KEY (external_report_id),
    CONSTRAINT fk_fr_efr_report_id FOREIGN KEY (fr_report_id) REFERENCES feedback_reports(report_id),  
    CONSTRAINT fk_upu_efr_published_unregistered_user_id FOREIGN KEY (upu_published_unregistered_user_id) REFERENCES unregistered_public_users(unregistered_user_id), 
    CONSTRAINT fk_upu_efr_published_account_id FOREIGN KEY (upu_published_account_id) REFERENCES unregistered_public_users(a_account_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 27 - external_feedback_reports
  ALTER TABLE external_feedback_reports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 27 - external_feedback_reports
--   INSERT INTO external_feedback_reports() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 28 - health_status_reports
  CREATE TABLE health_status_reports(
    report_id INT NOT NULL AUTO_INCREMENT,
    report_description VARCHAR(150) NOT NULL,
    rs_review_status_id TINYINT NOT NULL,
    submitted_date_time DATETIME DEFAULT current_timestamp,
    proof_of_pcr_test BLOB,
    upu_published_unregistered_user_id INT,
    upu_published_account_id INT,
    rpu_published_registered_user_id INT,
    rpu_published_account_id INT,
    o_reviewed_by_operator_id MEDIUMINT,
    o_reviewed_by_account_id INT,
    CONSTRAINT pk_external_feedback_report PRIMARY KEY (report_id),
    CONSTRAINT fk_rs_hsr_review_status_id FOREIGN KEY (rs_review_status_id) REFERENCES review_statuses(review_status_id),
    CONSTRAINT fk_upu_hsr_published_unregistered_user_id FOREIGN KEY (upu_published_unregistered_user_id) REFERENCES unregistered_public_users(unregistered_user_id),
    CONSTRAINT fk_upu_hsr_published_account_id FOREIGN KEY (upu_published_account_id) REFERENCES unregistered_public_users(a_account_id),
    CONSTRAINT fk_rpu_hsr_published_registeredUserID FOREIGN KEY (rpu_published_registered_user_id) REFERENCES registered_public_users(registered_user_id),
    CONSTRAINT fk_rpu_hsr_published_account_id FOREIGN KEY (rpu_published_account_id) REFERENCES registered_public_users(a_account_id),
    CONSTRAINT fk_o_hsr_reviewed_by_operator_id FOREIGN KEY (o_reviewed_by_operator_id) REFERENCES operators(operator_id),
    CONSTRAINT fk_o_hsr_reviewed_by_account_id FOREIGN KEY (o_reviewed_by_account_id) REFERENCES operators(a_account_id)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 28 - health_status_reports
  ALTER TABLE health_status_reports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 28 - health_status_reports
--   INSERT INTO health_status_reports() 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 29 - symptoms
  CREATE TABLE symptoms(
    symptom_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    symptom VARCHAR(150) NOT NULL,
    symptom_category VARCHAR(50) NOT NULL,
    CONSTRAINT pk_symptom PRIMARY KEY (symptom_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 29 - symptoms
  ALTER TABLE symptoms AUTO_INCREMENT = 0000001;

-- INSERTING RECORDS: TABLE 29 - symptoms
  INSERT INTO symptoms(symptom, symptom_category) 
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

-- CREATING TABLE: TABLE 30 - health_status_report_symptoms
  CREATE TABLE health_status_report_symptoms(
    hsr_report_id INT NOT NULL,
    s_symptom_id MEDIUMINT NOT NULL,
    CONSTRAINT pk_health_status_report_symptom PRIMARY KEY (hsr_report_id, s_symptom_id),
    CONSTRAINT fk_hs_hsrs_report_id FOREIGN KEY (hsr_report_id) REFERENCES health_status_reports(report_id),
    CONSTRAINT fk_s_hsrs_dymptom_id FOREIGN KEY (s_symptom_id) REFERENCES symptoms(symptom_id)
  )ENGINE=INNODB;

-- INSERTING RECORDS: TABLE 30 - health_status_report_symptoms
--   INSERT INTO health_status_report_symptoms(hsr_report_id, s_symptom_id) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 31 - standard_health_status_reports
  CREATE TABLE standard_health_status_reports(
	standard_report_id INT NOT NULL AUTO_INCREMENT,
    hsr_report_id INT NOT NULL,
    CONSTRAINT pk_standard_health_status_report PRIMARY KEY (standard_report_id, hsr_report_id),
    CONSTRAINT fk_hsr_shsr_report_id FOREIGN KEY (hsr_report_id) REFERENCES health_status_reports(report_id)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 31 - standard_health_status_reports
  ALTER TABLE standard_health_status_reports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 31 - standard_health_status_reports
--   INSERT INTO standard_health_status_reports(standard_report_id, hsr_report_id) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 32 - report_types
  CREATE TABLE report_types(
	report_type_id TINYINT NOT NULL AUTO_INCREMENT,
    report_type VARCHAR(100) NOT NULL,
    CONSTRAINT pk_report_type PRIMARY KEY (report_type_id)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 32 - report_types
  ALTER TABLE report_types AUTO_INCREMENT = 001;

-- INSERTING RECORDS: TABLE 32 - report_types
  INSERT INTO report_types(report_type) 
  VALUES 
  ('Enduring Severe Symptoms'),
  ('PCR Test Disease Positive');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 33 - emergency_health_status_reports
  CREATE TABLE emergency_health_status_reports(
	emergency_report_id INT NOT NULL AUTO_INCREMENT,
    hsr_report_id INT NOT NULL,
    rt_report_type_id TINYINT NOT NULL,
    s_severity_id TINYINT NOT NULL,
    CONSTRAINT pk_emergency_health_status_report PRIMARY KEY (emergency_report_id),
    CONSTRAINT fk_hsr_ehsr_report_id FOREIGN KEY (hsr_report_id) REFERENCES health_status_reports(report_id),
    CONSTRAINT fk_rt_eshr_report_type_id FOREIGN KEY (rt_report_type_id) REFERENCES report_types(report_type_id),
    CONSTRAINT fk_s_eshr_severity_id FOREIGN KEY (s_severity_id) REFERENCES severities(severity_id)
  )ENGINE=INNODB;

-- AUTO INCREMENT STARTING POINT: TABLE 33 - emergency_health_status_reports
  ALTER TABLE emergency_health_status_reports AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 33 - emergency_health_status_reports
--   INSERT INTO emergency_health_status_reports(hsr_report_id, rt_report_type_id, s_severity_id) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 34 - responses
  CREATE TABLE responses(
	reponse_id INT NOT NULL AUTO_INCREMENT,
    message VARCHAR(250) NOT NULL,
    sent_email_address VARCHAR(250),
    sent_date_time DATETIME DEFAULT current_timestamp, 
    fr_report_id INT,
    hsr_report_id INT,
    CONSTRAINT pk_Response PRIMARY KEY (reponse_id),
	CONSTRAINT fk_fr_r_report_id FOREIGN KEY (fr_report_id) REFERENCES feedback_reports(report_id),
    CONSTRAINT fk_hsr_r_report_id FOREIGN KEY (hsr_report_id) REFERENCES health_status_reports(report_id)
  )ENGINE=INNODB;
  
  -- AUTO INCREMENT STARTING POINT: TABLE 34 - responses
  ALTER TABLE responses AUTO_INCREMENT = 0000000001;

-- INSERTING RECORDS: TABLE 34 - responses
--   INSERT INTO responses(message, sent_email_address, fr_report_id) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 35 - health_detail_categories
  CREATE TABLE health_detail_categories(
    category_id TINYINT NOT NULL AUTO_INCREMENT,
    category VARCHAR(100) NOT NULL,
    CONSTRAINT pk_health_detail_category PRIMARY KEY (category_id)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 35 - health_detail_categories
  ALTER TABLE health_detail_categories AUTO_INCREMENT = 001;
  
-- INSERTING RECORDS: TABLE 35 - health_detail_categories
  INSERT INTO health_detail_categories(category) 
  VALUES 
  ('Health Guidelines'),
  ('Curfew Announcement');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 36 - health_details
  CREATE TABLE health_details(
    health_detail_id INT NOT NULL AUTO_INCREMENT,
    health_detail_heading VARCHAR(150) NOT NULL,
    health_detail_passage VARCHAR(250),
    hdc_category_id TINYINT NOT NULL,
    last_edit_date_time DATETIME ON UPDATE current_timestamp,
    o_last_edit_by_operator_id MEDIUMINT,
    o_last_edit_by_account_id INT,
    published_date_time DATETIME DEFAULT current_timestamp, 
    o_published_operator_id MEDIUMINT NOT NULL,
    o_published_account_id INT NOT NULL,
    CONSTRAINT pk_health_detail PRIMARY KEY (health_detail_id),
    CONSTRAINT fk_hdc_hd_category_id FOREIGN KEY (hdc_category_id) REFERENCES health_detail_categories(category_id),
    CONSTRAINT fk_o_hd_last_editByOperator_id FOREIGN KEY (o_last_edit_by_operator_id) REFERENCES operators(operator_id),
    CONSTRAINT fk_o_hd_last_editByAccount_id FOREIGN KEY (o_last_edit_by_account_id) REFERENCES operators(a_account_id),
    CONSTRAINT fk_o_hd_published_operator_id FOREIGN KEY (o_published_operator_id) REFERENCES operators(operator_id),
    CONSTRAINT fk_o_hd_published_account_id FOREIGN KEY (o_published_account_id) REFERENCES operators(a_account_id)
  )ENGINE=INNODB;
  
  -- AUTO INCREMENT STARTING POINT: TABLE 36 - health_details
  ALTER TABLE health_details AUTO_INCREMENT = 0000000001;
  
-- INSERTING RECORDS: TABLE 36 - health_details
--   INSERT INTO HealthDetails(health_detail_heading, health_detail_passage, hdc_category_id, o_published_operator_id, o_published_account_id) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 37 - health_detail_texts
  CREATE TABLE health_detail_texts(
    text_id INT NOT NULL AUTO_INCREMENT,
    text_heading VARCHAR(150) NOT NULL,
    detail_text VARCHAR(250) NOT NULL,
    text_section_sequence_number INT NOT NULL,
    hd_health_detail_id INT NOT NULL,
    CONSTRAINT pk_health_detail_text PRIMARY KEY (text_id),
    CONSTRAINT fk_hd_hdt_health_detail_id FOREIGN KEY (hd_health_detail_id) REFERENCES health_details(health_detail_id)
  )ENGINE=INNODB;
  
  -- AUTO INCREMENT STARTING POINT: TABLE 37 - health_detail_texts
  ALTER TABLE health_detail_texts AUTO_INCREMENT = 0000000001;
  
-- INSERTING RECORDS: TABLE 37 - health_detail_texts
--   INSERT INTO health_detail_texts(text_heading, detail_text, text_section_sequence_number, hd_health_detail_id) 
--   VALUES 
--   ();
  
-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 38 - hot_zone_categories
  CREATE TABLE hot_zone_categories(
    category_id TINYINT NOT NULL AUTO_INCREMENT,
    category VARCHAR(150) NOT NULL,
    CONSTRAINT pk_hot_zone_category PRIMARY KEY (category_id)
  )ENGINE=INNODB;
  
-- AUTO INCREMENT STARTING POINT: TABLE 38 - hot_zone_categories
  ALTER TABLE hot_zone_categories AUTO_INCREMENT = 001;
  
-- INSERTING RECORDS: TABLE 38 - hot_zone_categories
--   INSERT INTO hot_zone_categories(category) 
--   VALUES 
--   ('');

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 39 - hot_zone_locations
  CREATE TABLE hot_zone_locations(
    location_id INT NOT NULL AUTO_INCREMENT,
    zone_name VARCHAR(150) NOT NULL,
    hzc_category_id TINYINT NOT NULL,
    s_severity_id TINYINT NOT NULL,
    last_edit_date_time DATETIME ON UPDATE current_timestamp,
    o_last_edit_by_operator_id MEDIUMINT, 
    o_last_edit_by_account_id INT,
    published_date_time DATETIME DEFAULT current_timestamp, 
    o_published_operator_id MEDIUMINT NOT NULL,
    o_published_account_id INT NOT NULL,
    CONSTRAINT pk_hot_zone_location PRIMARY KEY (location_id),
    CONSTRAINT fk_hzc_hzl_category_id FOREIGN KEY (hzc_category_id) REFERENCES hot_zone_categories(category_id),
    CONSTRAINT fk_s_hzl_severity_id FOREIGN KEY (s_severity_id) REFERENCES severities(severity_id),
    CONSTRAINT fk_o_hzl_last_edit_by_operator_id FOREIGN KEY (o_last_edit_by_operator_id) REFERENCES operators(operator_id),
    CONSTRAINT fk_o_hzl_last_edit_by_account_id FOREIGN KEY (o_last_edit_by_account_id) REFERENCES operators(a_account_id),
    CONSTRAINT fk_o_hzl_published_operator_id FOREIGN KEY (o_published_operator_id) REFERENCES operators(operator_id),
    CONSTRAINT fk_o_hzl_published_account_id FOREIGN KEY (o_published_account_id) REFERENCES operators(a_account_id)
  )ENGINE=INNODB;
  
  -- AUTO INCREMENT STARTING POINT: TABLE 39 - hot_zone_locations
  ALTER TABLE hot_zone_locations AUTO_INCREMENT = 0000000001;
  
-- INSERTING RECORDS: TABLE 39 - hot_zone_locations
--   INSERT INTO hot_zone_locations(zone_name, hzc_category_id, s_severity_id, o_published_operator_id, o_published_account_id) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 40 - hot_zone_location_latitudes
  CREATE TABLE hot_zone_location_latitudes(
    hzl_location_id INT NOT NULL,
    latitude FLOAT NOT NULL,
    sequence_order INT NOT NULL,
    CONSTRAINT pk_hot_zone_location_latitude PRIMARY KEY (hzl_location_id, latitude),
    CONSTRAINT fk_hzl_zhlla_hzl_location_id FOREIGN KEY (hzl_location_id) REFERENCES hot_zone_locations(location_id)
  )ENGINE=INNODB;
  
-- INSERTING RECORDS: TABLE 40 - hot_zone_location_latitudes
--   INSERT INTO hot_zone_location_latitudes(hzl_location_id, latitude, sequence_order,) 
--   VALUES 
--   ();

-- |------------------------------------------------------------------------------------------------|

-- CREATING TABLE: TABLE 41 - hot_zone_location_longitudes
  CREATE TABLE hot_zone_location_longitudes(
    hzl_location_id INT NOT NULL,
    longitude FLOAT NOT NULL,
    sequence_order INT NOT NULL,
    CONSTRAINT pk_HotZoneLocationLongitude PRIMARY KEY (hzl_location_id, longitude),
    CONSTRAINT fk_hzl_hzllo_hzl_location_id FOREIGN KEY (hzl_location_id) REFERENCES hot_zone_locations(location_id)
  )ENGINE=INNODB;
  
-- INSERTING RECORDS: TABLE 41 - hot_zone_location_longitudes
--   INSERT INTO hot_zone_location_longitudes(hzl_location_id, longitude, sequence_order) 
--   VALUES 
--   ();
