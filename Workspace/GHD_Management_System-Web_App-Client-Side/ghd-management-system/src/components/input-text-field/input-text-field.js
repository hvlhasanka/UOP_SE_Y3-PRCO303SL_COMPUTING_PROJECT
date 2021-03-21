import React from 'react';
import { Grid, TextField } from '@material-ui/core';

import './input-text-field.css';
import HeadingTwo from '../heading-two/heading-two.js';

const InputTextField = ({
  inputTextFieldHeading,
  textFieldPlaceHolderName,
  className
}) => {

  return(
    <div className={`inputTextField ${className}`}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <HeadingTwo className="inputTextFieldHeading" headingTitle={inputTextFieldHeading} />
        </Grid>
        <Grid item xs={12}>
          <TextField id="textField" className="textField" variant="outlined" />
        </Grid>
      </Grid>
    </div>
  );

}

export default InputTextField;