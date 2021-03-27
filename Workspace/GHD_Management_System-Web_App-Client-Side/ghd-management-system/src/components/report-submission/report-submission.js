import React from 'react';
import { 
  Grid,
  TextField,
  Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './report-submission.css';
import HeadingTwo from '../heading-two/heading-two';

const ReportSubmission = ({
  className
}) => {

  return(
    <div className="report__main-container">
      <div className="report__container">
        <form>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>  

              <Grid container justify="center" spacing={2}>
                <Grid item xs={2}>  
                  <Button
                    type="button" 
                    className="report__section-close-button"
                    variant="outlined"
                  >
                    <CloseIcon />
                  </Button>
                </Grid>
                <Grid item xs={10}>  
                  <HeadingTwo headingTitle="REPORT SUBMISSION" />
                </Grid>
              </Grid> 
            
            </Grid>
            <Grid item xs={12}>  
              
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>  
                  <p className="report__item-heading">Subject</p>
                </Grid>
                <Grid item xs={12}>  
                  <TextField 
                    id="text-field-subject" 
                    className="text-field report__subject" 
                    name="subject"
                    variant="outlined" 
                    type="text"
                  />
                </Grid>
              </Grid> 

            </Grid>
            <Grid item xs={12}>  
              
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>  
                  <p className="report__item-heading">Feedback</p>
                </Grid>
                <Grid item xs={12}>  
                  <TextField 
                    id="text-field-feedback" 
                    className="text-field report__feedback" 
                    name="subject"
                    variant="outlined" 
                    type="text"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid> 

            </Grid>
            <Grid item xs={12}>  
              
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>  
                  <p className="report__item-heading">Reachable Email Address</p>
                </Grid>
                <Grid item xs={12}>  
                  <TextField 
                    id="text-field-email-address" 
                    className="text-field report__feedback-email-address" 
                    name="emailAddress"
                    variant="outlined" 
                    type="text"
                  />
                </Grid>
              </Grid> 

            </Grid>
            <Grid item xs={12}>  
              
              <Button 
                variant="outlined" 
                color="primary" 
                className="report__submit-button"
                type="submit">
                <b>SUBMIT</b>
              </Button>

            </Grid>
          </Grid>  
        </form>
      </div>
    </div>
  );

}

export default ReportSubmission;
