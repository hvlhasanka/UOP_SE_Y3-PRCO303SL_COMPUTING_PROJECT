import React from 'react';
import { Grid } from '@material-ui/core';

import './login.css';
import logo from '../../../assets/logo/GHD-Management-System-Logo.png';
import HeadingOne from '../../../components/heading-one/heading-one.js';

const Login = () => {

  return(
    <div className='loginPage'>
      <div className="loginSection">
        {/* Logo Container */}
        <div className="logoContainer">
          <img src={logo} alt="ghdManagementSystemLogo" className="ghdManagementSystemLogo" />
        </div>

        {/* Login Container */}
        <div className="loginContainer">
          <div className="innerLoginContainer">
            <Grid container justify="center" spacing={2}>
              <Grid item xs={12}>
                <HeadingOne className="loginHeading" headingTitle="Login" />
              </Grid>
              <Grid item xs={12}>
                email
              </Grid>
              <Grid item xs={12}>
                password
              </Grid>
              <Grid item xs={12}>
                password
              </Grid>
            </Grid>
            
          </div>
        </div>

      </div>
      <div className="coverImageSection">

      </div>
    </div>
  );

}

export default Login;
