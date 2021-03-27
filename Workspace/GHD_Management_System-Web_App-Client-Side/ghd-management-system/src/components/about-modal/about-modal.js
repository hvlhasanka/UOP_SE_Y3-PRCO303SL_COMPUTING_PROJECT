import React from 'react';
import { 
  Grid,
  Button,
  Avatar
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './about-modal.css';
import nsbmLogo from '../../assets/logo/NSBM-Logo.png';
import plymouthUniversityLogo from '../../assets/logo/Plymouth-University-Logo.png';
import HeadingTwo from '../heading-two/heading-two';

const AboutModal = () => {

  return(
    <div className="about-modal__container">
      <div className="about-modal__header">

        <Grid container justify="center" spacing={2}>
          <Grid item xs={11}>

          </Grid>
          <Grid item xs={1}>
            <Button
              type="button" 
              className="about-modal__close-button"
              variant="outlined"
            >
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>

      </div>
      <div className="about-modal__content">
        <div className="about-modal__logo">
        
          <Grid container justify="center" spacing={2}>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={3}>
              <div className="about-modal__modal-logo">
                <img src={nsbmLogo} alt="NSBM Logo" className="about-modal__nsbm-logo" />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="about-modal__modal-logo">
                <img src={plymouthUniversityLogo} alt="Plymouth University Logo" className="about-modal__uop-logo" />
              </div>
            </Grid>
            <Grid item xs={3}>
              
            </Grid>
          </Grid>

        </div>
        <div className="about-modal__description">
        
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <div className="about-modal__text">
                <HeadingTwo headingTitle="Infrastructure was developed by:" boldText="Mr. H.V.L.Hasanka" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="about-modal__text">
                <HeadingTwo headingTitle="Project supervised by: " boldText="Mr. Pramudya Tilkaratne" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="about-modal__text">
                <HeadingTwo headingTitle="Project supporting coursework: " boldText="PRCO303SL Computing Project Module Coursework" />
              </div>
            </Grid>
          </Grid>

        </div>
      </div>
    </div>
  );

}

export default AboutModal;
