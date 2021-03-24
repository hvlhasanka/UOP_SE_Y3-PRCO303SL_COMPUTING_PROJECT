import React, {useState} from 'react';
import { 
  Grid, 
  TextField, 
  Icon, 
  InputAdornment, 
  IconButton, 
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import LockIcon from '@material-ui/icons/Lock';

import './login.css';
import HeadingOne from '../../../components/heading-one/heading-one.js';
import HeadingTwo from '../../../components/heading-two/heading-two.js';
import logo from '../../../assets/logo/GHD-Management-System-Logo.png';
import coverImage from '../../../assets/cover-image/cover-image.jpg';

const Login = () => {

  return(
    <div className='login'>
      <div className="login__login-section">
        {/* Logo Container */}
        <div className="login__logo-container">
          <img src={logo} alt="GHD Management System Logo" className="login__ghd-management-system-logo" />
        </div>

        {/* Login Container */}
        <div className="login__login-container">
          <div className="login__inner-login-container">
            <Grid container justify="center" spacing={2}>
              <Grid item xs={12}>
                <HeadingOne className="login__login-heading" headingTitle="Login" />
              </Grid>
              <Grid item xs={12}>

                <div className="login__email-input-text-field">
                  <Grid container justify="center" spacing={2}>
                    <Grid item xs={12}>
                      <Grid container justify="center">
                        <Grid item xs={1} className="login__left-material-icon">
                          <EmailIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <HeadingTwo className="login__input-text-field-heading" headingTitle="Email Address" />
                        </Grid>
                        <Grid item xs={1} className="login__right-material-icon" >
                          <InfoIcon />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                        id="text-field" 
                        className="text-field login__email-address-text-field" 
                        variant="outlined" 
                        value=""
                      />
                    </Grid>
                  </Grid>
                </div>

              </Grid>
              <Grid item xs={12}>

                <div className="login__password-input-text-field">
                  <Grid container justify="center" spacing={2}>
                    <Grid item xs={12}>
                      <Grid container justify="center">
                        <Grid item xs={1} className="login__left-material-icon">
                          <LockIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <HeadingTwo className="login__input-text-field-heading" headingTitle="Password" />
                        </Grid>
                        <Grid item xs={1} className="login__right-material-icon" >
                          <InfoIcon />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                        id="text-field-password" 
                        className="text-field login__password-text-field" 
                        variant="outlined" 
                        value=""
                      />
                    </Grid>
                  </Grid>
                </div>

              </Grid>
              <Grid item xs={12}>
                
                <div className="login__login-button">
                     
                </div>

              </Grid>
            </Grid>
            
          </div>
        </div>

      </div>
      <div className="login__cover-image-section">
        <div className="login__cover-image-container">
          <img src={coverImage} alt="Cover Image" className="login__cover-image" />
        </div>
      </div>
    </div>
  );

}

export default Login;
