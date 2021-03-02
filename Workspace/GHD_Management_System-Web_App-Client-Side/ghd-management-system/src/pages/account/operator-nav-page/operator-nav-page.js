import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './operator-nav-page.css';
import DashboardSubPage from './dashboard-sub-page/dashboard-sub-page';
import ProfileSubPage from './profile-sub-page/profile-sub-page';
import SettingsSubPage from './settings-sub-page/settings-sub-page';

const OperatorNavPage = () => {

  return(
    <div className='operator-nav-page'>

      <Router>
        <Switch>
          <Route path="/" exact component={DashboardSubPage} />
          <Route path="/operator/profile" component={ProfileSubPage} />
          <Route path="/operator/settings" component={SettingsSubPage} />
        </Switch>
      </Router>

    </div>
  );

}

export default OperatorNavPage;
