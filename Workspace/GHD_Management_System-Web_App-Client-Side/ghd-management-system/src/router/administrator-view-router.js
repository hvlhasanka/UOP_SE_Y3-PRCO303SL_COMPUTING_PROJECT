/**
 * GHD Management System - React Web App
 * ROUTING | END USER - ADMINISTRATOR | Administrator View Router
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import DashboardSubPage from '../pages/account/administrator-nav-page/dashboard-sub-page/dashboard-sub-page';
import FeedbackReportsSubPage from '../pages/account/administrator-nav-page/feedback-reports-sub-page/feedback-reports-sub-page';
import OperatorAccountsSubPage from '../pages/account/administrator-nav-page/operator-accounts-sub-page/operator-accounts-sub-page';
import AdminAccountsSubPage from '../pages/account/administrator-nav-page/admin-accounts-sub-page/admin-accounts-sub-page';
import ProfileSubPage from '../pages/account/administrator-nav-page/profile-sub-page/profile-sub-page';
import SettingsSubPage from '../pages/account/administrator-nav-page/settings-sub-page/settings-sub-page';
import PageNotFound from '../pages/error/page-not-found/page-not-found';
import Login from '../pages/auth/login/login';

function AdministratorViewRouter({ match }) {

  return (
    <Router>
      <div className="GHD-Management-System-Administrator">
        <Switch>
          <Route path={"/login"} component={ Login } />
          <Route path={`${match.url}/dashboard`} component={ DashboardSubPage } />
          <Route path={`${match.url}/feedback-reports`} component={ FeedbackReportsSubPage } />
          <Route path={`${match.url}/operator-accounts`} component={ OperatorAccountsSubPage } />
          <Route path={`${match.url}/admin-accounts`} component={ AdminAccountsSubPage } />
          <Route path={`${match.url}/profile`} component={ ProfileSubPage } />
          <Route path={`${match.url}/settings`} component={ SettingsSubPage } />
          <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
          <Route component={ PageNotFound } />
        </Switch>
      </div>
    </Router>
  );
  
}

export default AdministratorViewRouter;
