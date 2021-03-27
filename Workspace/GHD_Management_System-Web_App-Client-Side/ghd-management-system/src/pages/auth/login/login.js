import React, {useEffect, useState} from 'react';
import { 
  Grid, 
  TextField, 
  Button,
  Tooltip
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './login.css';
import logo from '../../../assets/logo/GHD-Management-System-Logo.png';
import coverImage from '../../../assets/cover-image/cover-image.jpg';
import { 
  HeadingOne, 
  HeadingTwo, 
  ReportSubmission,
  AboutModal
} from '../../../components';

function Login(){

  const { register, handleSubmit, errors } = useForm();
  const [emailAddressValidated, setEmailAddressValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showReportSubmissionSection, setShowReportSubmissionSection] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const onLoginFormSubmit = (formData) => {
    if(formData.emailAddress != ""){
      setEmailAddressValidated(true);
    }
    console.log(formData);
  }

  const openReportSubmission = () => {
    setShowReportSubmissionSection(!showReportSubmissionSection);
  }

  const handleShowAboutModal = () => {
    setShowAboutModal(!showAboutModal)
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
            <div>
              <form className="login__form" onSubmit={handleSubmit(onLoginFormSubmit)}>
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
                              <HeadingTwo 
                                className="login__input-text-field-heading" 
                                headingTitle="Email Address" 
                              />
                            </Grid>
                            <Grid item xs={1} className="login__right-material-icon" >
                              <Tooltip title="Provide registered email address" arrow>
                                  <Button
                                    type="button" 
                                    className="login__more-info-button"
                                  >
                                    <InfoIcon />
                                  </Button>
                                </Tooltip>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField 
                            id="text-field" 
                            className="text-field login__email-address-text-field" 
                            name="emailAddress"
                            variant="outlined" 
                            type="email"
                            error={errors.emailAddress ? true : false}
                            inputRef={register({
                              required: "Email is required",
                              pattern: {
                                value: /[a-zA-Z0-9._%-]+[.ghd]+@[gmail.com]+/,
                                message: "Email is invalid"
                              }
                            })}
                          />
                        </Grid>
                      </Grid>
                    </div>

                  </Grid>
                  <Grid item xs={12}>
                    
                    {emailAddressValidated == true ? "" : 
                      <div className="login__login-button-container">
                        <Button 
                          variant="outlined" 
                          color="primary" 
                          className="login__login-button"
                          type="submit">
                          <b>NEXT</b>
                        </Button>
                      </div>
                    }

                  </Grid>
                  <Grid item xs={12}>
                    
                    <div className="login__form-error">
                      {errors.emailAddress && <p>{errors.emailAddress.message}</p>}
                    </div>

                  </Grid>
                </Grid>
              </form>
            </div>
            {emailAddressValidated &&
              <div>
                <form className="login__form" onSubmit={handleSubmit(onLoginFormSubmit)}>
                  <Grid container justify="center" spacing={2}>
                    <Grid item xs={12}>

                      <div className="login__password-input-text-field">
                        <Grid container justify="center" spacing={2}>
                          <Grid item xs={12}>
                            <Grid container justify="center">
                              <Grid item xs={1} className="login__left-material-icon">
                                <LockIcon />
                              </Grid>
                              <Grid item xs={10}>
                                <HeadingTwo 
                                  className="login__input-text-field-heading" 
                                  headingTitle="Password" 
                                />
                              </Grid>
                              <Grid item xs={1} className="login__right-material-icon" >
                                <Tooltip title="Provide account password" arrow>
                                  <Button
                                    type="button" 
                                    className="login__more-info-button"
                                  >
                                    <InfoIcon />
                                  </Button>
                                </Tooltip>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField 
                              id="text-field-password" 
                              className="text-field-password login__password-text-field" 
                              name="password"
                              variant="outlined"
                              type={showPassword === true ? "text" : "password"} 
                              error={errors.password ? true : false}
                              inputRef={register({
                                required: "Password required",
                                minLength: {
                                  value: 10,
                                  message: "Password invalid"
                                },
                                maxLength: {
                                  value: 30,
                                  message: "Password invalid"
                                },
                                pattern: {
                                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#[\\$%[\\^&[\\*])(?=.{10,30})/,
                                  message: "Password invalid"
                                }
                              })}
                            />
                            <Tooltip title="Toggle password visibility" arrow>
                              <Button
                                type="button" 
                                className="login__password_visibility_button"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword === true ? <Visibility /> : <VisibilityOff />}
                              </Button>
                            </Tooltip>
                          </Grid>
                          <Grid item xs={12}>
                            <Button 
                              className="login__forgot-password-button" 
                              style={{textTransform: 'none'}}
                            >
                              <b>Forgot password?</b>
                            </Button>
                          </Grid>
                        </Grid>
                      </div>

                    </Grid>
                    <Grid item xs={12}>
                      
                      <div className="login__form-error">
                        {errors.password && <p>{errors.password.message}</p>}
                      </div>

                    </Grid>
                    <Grid item xs={12}>
                      
                      <div className="login__login-button-container">
                        <Button 
                          variant="outlined" 
                          color="primary" 
                          className="login__login-button"
                          type="submit">
                          <b>LOGIN</b>
                        </Button>
                      </div>

                    </Grid>
                  </Grid>
                </form>
              </div>
            }

            <Grid container justify="center" spacing={2}>
              <Grid item xs={12}>
                
                <div className="login__no-account">
                  <p>Don't have an account?
                    <Button 
                      variant="outlined" 
                      className="login__forgot-password-button" 
                      style={{textTransform: 'none'}}
                      onClick={() => openReportSubmission()}
                    >
                      <b>Submit Report</b>
                    </Button>
                  </p>
                </div>

              </Grid>
              <Grid item xs={12}>
                
                <div className="login__footer-row">
                  <Grid container justify="center" spacing={2}>
                    <Grid item xs={3}>
                    <Button 
                      variant="outlined" 
                      className="login__report_button"
                      onClick={() => openReportSubmission()}
                    >
                      <b>REPORT</b>
                    </Button>
                    </Grid>
                    <Grid item xs={3}>
                      
                    </Grid>
                    <Grid item xs={3}>
                      
                    </Grid>
                    <Grid item xs={3}>

                      <Button 
                        variant="outlined" 
                        className="login__about-button"
                        onClick={() => handleShowAboutModal()}
                      >
                        <b>ABOUT</b>
                      </Button>

                      {showAboutModal && 
                        <AboutModal />
                      }

                    </Grid>
                  </Grid>
                </div>

              </Grid>
            </Grid>
            
          </div>
        </div>

        {showReportSubmissionSection &&
          <ReportSubmission />
        }

      </div>

      {/* Cover Image Container */}
      <div className="login__cover-image-section">
        <Link to={""} className="login__cover-image-container">
          <img src={coverImage} alt="Cover Image" className="login__cover-image" />
        </Link>
      </div>
      
    </div>
  );

};

export default Login;
