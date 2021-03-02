import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './administrator-nav-page.css';
import DashboardSubPage from './dashboard-sub-page/dashboard-sub-page';
import FeedbackReportsSubPage from './feedback-reports-sub-page/feedback-reports-sub-page';
import OperatorAccountsSubPage from './operator-accounts-sub-page/operator-accounts-sub-page';
import AdminAccountsSubPage from './admin-accounts-sub-page/admin-accounts-sub-page';
import ProfileSubPage from './profile-sub-page/profile-sub-page';
import SettingsSubPage from './settings-sub-page/settings-sub-page';

const AdministratorNavPage = () => {

  return(
    <div className='administrator-nav-page'>
      
      <Router>
        <Switch>
          <Route path="/admin/dashboard" exact component={DashboardSubPage} />
          <Route path="/admin/feedback-reports" component={FeedbackReportsSubPage} />
          <Route path="/operator-accounts" component={OperatorAccountsSubPage} />
          <Route path="/admin/admin-accounts" component={AdminAccountsSubPage} />
          <Route path="/admin/profile" component={ProfileSubPage} />
          <Route path="/admin/settings" component={SettingsSubPage} />
        </Switch>
      </Router>

    </div>
  );

}

export default AdministratorNavPage;
