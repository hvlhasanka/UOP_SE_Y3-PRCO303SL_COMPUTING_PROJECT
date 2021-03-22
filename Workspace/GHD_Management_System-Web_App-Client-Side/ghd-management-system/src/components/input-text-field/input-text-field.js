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

import './input-text-field.css';
import HeadingTwo from '../heading-two/heading-two.js';

const InputTextField = ({
  className,
  materialIconName,
  inputTextFieldHeading,
  textFieldPlaceHolderName
}) => {

  const [inputTextFieldValue, setInputTextFieldValues] = useState({
    inputFieldValue: '',
    showFieldPasswordValue: false
  });

  const handleValueChange = (prop) => (event) => {
    setInputTextFieldValues({ ...inputTextFieldValue, [prop]: event.target.value });
  };

  const handleOnClickShowPassword = () => {
    setInputTextFieldValues({ ...inputTextFieldValue, showPasswordValue: !inputTextFieldValue.showFieldPasswordValue });
  };

  const handleMouseDownPasswordEvent = (event) => {
    event.preventDefault();
  };

  return(
    <div className={`inputTextField ${className}`}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={1} className="leftMaterialIcon">
              {materialIconName == "shaded-mail" && <EmailIcon />}
              {materialIconName == "shaded-lock" && <LockIcon />}
            </Grid>
            <Grid item xs={10}>
              <HeadingTwo className="inputTextFieldHeading" headingTitle={inputTextFieldHeading} />
            </Grid>
            <Grid item xs={1} className="rightMaterialIcon" >
              <InfoIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {inputTextFieldHeading == "Password" || inputTextFieldHeading == "Confirm Password" && 
            <TextField 
              id="textFieldPassword" 
              className={`textFieldPassword ${className}`} 
              variant="outlined" 
              value={inputTextFieldValue.inputFieldValue}
              onChange={handleValueChange("Password")}
              type={inputTextFieldValue.showFieldPasswordValue ? "text" : "password"} 
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleOnClickShowPassword}
                    onMouseDown={handleMouseDownPasswordEvent}
                  >
                    {inputTextFieldValue.showFieldPasswordValue ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          }
          {inputTextFieldHeading != "Password" || inputTextFieldHeading != "Confirm Password" && 
            <TextField 
              id="textField" 
              className={`textField ${className}`} 
              variant="outlined" 
              value={inputTextFieldValue.inputFieldValue}
            />
          }
        </Grid>
      </Grid>
    </div>
  );

}

export default InputTextField;
