import React from 'react';
import { Grid } from '@material-ui/core';

import './login.css';
import HeadingOne from '../../../components/heading-one/heading-one.js';
import InputTextField from '../../../components/input-text-field/input-text-field.js';
import logo from '../../../assets/logo/GHD-Management-System-Logo.png';
import coverImage from '../../../assets/cover-image/cover-image.jpg';

const Login = () => {

  return(
    <div className='loginPage'>
      <div className="loginSection">
        {/* Logo Container */}
        <div className="logoContainer">
          <img src={logo} alt="GHD Management System Logo" className="ghdManagementSystemLogo" />
        </div>

        {/* Login Container */}
        <div className="loginContainer">
          <div className="innerLoginContainer">
            <Grid container justify="center" spacing={2}>
              <Grid item xs={12}>
                <HeadingOne className="loginHeading" headingTitle="Login" />
              </Grid>
              <Grid item xs={12}>
                <InputTextField className="emailInputTextField" inputTextFieldHeading="Email Address" materialIconName="shaded-mail" />
              </Grid>
              <Grid item xs={12}>
                <InputTextField className="passwordInputTextField" inputTextFieldHeading="Password" materialIconName="shaded-lock" />
              </Grid>
            </Grid>
            
          </div>
        </div>

      </div>
      <div className="coverImageSection">
        <div className="coverImageContainer">
          <img src={coverImage} alt="Cover Image" className="coverImage" />
        </div>
      </div>
    </div>
  );

}

export default Login;
