import React, {useEffect, useState} from 'react';
import { 
  Grid, 
  TextField, 
  Button,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogin } from '../../../services/index';

import './login.css';
import HeadingOne from '../../../components/heading-one/heading-one.js';
import HeadingTwo from '../../../components/heading-two/heading-two.js';
import logo from '../../../assets/logo/GHD-Management-System-Logo.png';
import coverImage from '../../../assets/cover-image/cover-image.jpg';

const Login = (props) => {

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  resetLoginForm = () => {
    setEmailAddress("");
    setPassword("");
  }

  validateUser = () => {
    props.authLogin(emailAddress, password);

    setTimeout(() => {
      if(props.login.isLoggedIn){
        return props.history.push("/");
      }
      else {
        resetLoginForm();
        setState
      }
    });
  }

  useEffect(() => {
    
  }, []);

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
            {/* Login Form */}
            <form className="login__form">
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
                            <button>
                              <InfoIcon />
                            </button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField 
                          id="text-field" 
                          className="text-field login__email-address-text-field" 
                          variant="outlined" 
                          value={emailAddress}
                          onChange={(textField) => setEmailAddress(textField.target.value)}
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
                            <button>
                              <InfoIcon />
                            </button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField 
                          id="text-field-password" 
                          className="text-field login__password-text-field" 
                          variant="outlined"
                          type={showPassword === true ? "text" : "password"} 
                          value={password}
                          onChange={(textField) => setPassword(textField.target.value)}
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword === true ? <VisibilityOff /> : <Visibility />}
                        </button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button className="login__forgot-password-button" style={{textTransform: 'none'}}>
                          <b>Forgot password?</b>
                        </Button>
                      </Grid>
                    </Grid>
                  </div>

                </Grid>
                <Grid item xs={12}>
                  
                  <div className="login__login-button-container">
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      className="login__login-button" 
                      disabled={emailAddress.length === 0 || password.length === 0}>
                      <b>LOGIN</b>
                    </Button>
                  </div>

                </Grid>
                <Grid item xs={12}>
                  
                  <div className="login__no-account">
                    <p>Don't have an account?
                      <Button variant="outlined" className="login__forgot-password-button" style={{textTransform: 'none'}}>
                        <b>Submit Report</b>
                      </Button>
                    </p>
                  </div>

                </Grid>
                <Grid item xs={12}>
                  
                  <div className="login__footer-row">
                    <Grid container justify="center" spacing={2}>
                      <Grid item xs={3}>
                      <Button variant="outlined" className="login__report_button">
                        <b>REPORT</b>
                      </Button>
                      </Grid>
                      <Grid item xs={3}>
                        
                      </Grid>
                      <Grid item xs={3}>
                        
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" className="login__about-button">
                          <b>ABOUT</b>
                        </Button>
                      </Grid>
                    </Grid>
                  </div>

                </Grid>
              </Grid>
            </form>
            
          </div>
        </div>

      </div>

      {/* Cover Image Container */}
      <div className="login__cover-image-section">
        <Link to={""} className="login__cover-image-container">
          <img src={coverImage} alt="Cover Image" className="login__cover-image" />
        </Link>
      </div>

    </div>
  );

}

const mapStateToProps = state => {
  return {
    auth: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogin: (emailAddress, password) => dispatch(authLogin(emailAddress, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
