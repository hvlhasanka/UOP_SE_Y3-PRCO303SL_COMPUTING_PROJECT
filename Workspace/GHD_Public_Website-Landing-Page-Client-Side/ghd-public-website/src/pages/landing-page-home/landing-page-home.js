/**
 * GHD Public Website - React Web App
 * PAGE | END USER - PUBLIC | Landing Page Home Page
 */
import React, { useState } from 'react';
import { 
  Grid,
  Button,
  Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import './landing-page-home.css';
import ghdCovid19Logo from '../../assets/images/logo/GHD-COVID19-Logo.png';
import uiImageOne from '../../assets/images/landing-page-home-page/ui-image-one.jpg';
import uiImageTwo from '../../assets/images/landing-page-home-page/ui-image-two.jpg';
import uiImageThree from '../../assets/images/landing-page-home-page/ui-image-three.jpg';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LandingPageHomePage = () => {

  const [comingSoonSnackbarEnabled, setComingSoonSnackbarEnabled] = useState(false);

  const enableComingSoonSnackBar = () => {
    setComingSoonSnackbarEnabled(true);
  };

  const closeComingSoonSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setComingSoonSnackbarEnabled(false);
  };

  const [downloadSnackbarEnabled, setDownloadSnackbarEnabled] = useState(false);

  const enableDownloadSnackBar = () => {
    setDownloadSnackbarEnabled(true);
  };

  const closeDownloadSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setDownloadSnackbarEnabled(false);
  };

  // Function - Creating the element to download the app APK file
  function downloadAndroidAPK() {
    enableDownloadSnackBar();
    var downloadElement = document.createElement("a");
    downloadElement.href = "https://firebasestorage.googleapis.com/v0/b/ghd-covid19.appspot.com/o/deployments%2Fghd-covid19-android-app-apk%2Fghd-covid19-v1.0.0.apk?alt=media&token=ab6721a7-477c-4d1e-8e6a-51875e30346d";
    downloadElement.setAttribute("download", "ghd-covid19-v1.0.0.apk");
    downloadElement.click();
  }

  return(
  <div className="landing-page-home">
    <div className="header-container">
      <div className="content-container">
        <div className="logo-block">
          <img src={ghdCovid19Logo} alt="GHD COVID19 Logo" className="logo-img" />
        </div>
      </div>
    </div>
    <div className="body-container">
      <div className="content-container">
      <Grid container justify="center" spacing={2}> 
        <Grid item xs={12} lg={5}>
          <Grid container justify="center" spacing={2} className="left-grid-container">
            <Grid item xs={12}>
              <div className="text-heading-block">
                <p className="text-heading">BE AWARE<br/>OF YOUR<br/>SURROUNDINGS</p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="text-sub-heading-block-one">
                <p className="text-sub-heading">Notify the possibility of exposure to Covid19</p>
              </div>
              <div className="text-sub-heading-block-two">
                <p className="text-sub-heading">Get official health details from the government health authorities</p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="button-block">
                <Button variant="outlined" color="primary" style={{
                  textTransform: 'none', 
                  fontWeight: 'bold',
                  borderWidth: 3,
                  borderRadius: 10,
                  borderColor: '#236C9C',
                  color: '#205476'
                }} className="button" onClick={() => downloadAndroidAPK()}>
                  Download App | GOOGLE ANDROID
                </Button>
              </div>
              <div className="button-block">
                <Button variant="outlined" color="primary" style={{
                  textTransform: 'none', 
                  fontWeight: 'bold',
                  borderWidth: 3,
                  borderRadius: 10,
                  borderColor: '#236C9C',
                  color: '#205476'
                }} className="button" onClick={enableComingSoonSnackBar}>
                  Download App | APPLE iOS
                </Button>
              </div>
              <Snackbar open={comingSoonSnackbarEnabled} autoHideDuration={2000} onClose={closeComingSoonSnackBar}>
                <Alert onClose={closeComingSoonSnackBar} severity="info">
                  Coming Soon
                </Alert>
              </Snackbar>
              <Snackbar open={downloadSnackbarEnabled} autoHideDuration={2000} onClose={closeDownloadSnackBar}>
                <Alert onClose={closeDownloadSnackBar} severity="info">
                  Please wait... File Downloading
                </Alert>
              </Snackbar>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Grid container justify="center" spacing={2} className="right-grid-container">
            <Grid item xs={12}>
              <Grid container justify="center" spacing={0}>
                <Grid item xs={4}>
                  <div className="ui-image-tile-block tile-one">
                    <img src={uiImageOne} alt="GHD COVID19 UI One" className="ui-image" />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="ui-image-tile-block tile-two">
                    <img src={uiImageTwo} alt="GHD COVID19 UI Two" className="ui-image" />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="ui-image-tile-block tile-three">
                    <img src={uiImageThree} alt="GHD COVID19 UI Three" className="ui-image" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
    <div className="footer-container">
      <div className="content-container">
        <div className="footer-text-block">
          <p className="footer-text">GHD COVID19 Infrastructure Developed By: H.V.L. Hasanka</p>
        </div>
      </div>
    </div>
  </div>
  );

}

export default LandingPageHomePage;
