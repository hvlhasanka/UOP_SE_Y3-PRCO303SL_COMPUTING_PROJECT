import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import DashboardSubPage from '../pages/account/operator-nav-page/dashboard-sub-page/dashboard-sub-page';
import HealthDetailsSubPage from '../pages/account/operator-nav-page/health-details-sub-page/health-details-sub-page';
import HealthStatusReportsSubPage from '../pages/account/operator-nav-page/health-status-reports-sub-page/health-status-reports-sub-page';
import HotZoneSubPages from '../pages/account/operator-nav-page/hot-zones-sub-page/hot-zone-sub-page';
import ProfileSubPage from '../pages/account/operator-nav-page/profile-sub-page/profile-sub-page';
import SettingsSubPage from '../pages/account/operator-nav-page/settings-sub-page/settings-sub-page';
import Login from '../pages/auth/login/login';
import PageNotFound from '../pages/error/page-not-found/page-not-found';

function OperatorViewRouter({ match }) {

  return (
    <Router>
      <div className="GHD-Management-System-Operator">
        <Switch>
          <Route path={"/login"} component={ Login } />
          <Route path={`${match.url}/dashboard`} component={ DashboardSubPage } />
          <Route path={`${match.url}/health-details`} component={ HealthDetailsSubPage } />
          <Route path={`${match.url}/health-status-reports`} component={ HealthStatusReportsSubPage } />
          <Route path={`${match.url}/hot-zones`} component={ HotZoneSubPages } />
          <Route path={`${match.url}/profile`} component={ ProfileSubPage } />
          <Route path={`${match.url}/settings`} component={ SettingsSubPage } />
          <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
          <Route component={ PageNotFound } />
        </Switch>
      </div>
    </Router>
  );
  
}

export default OperatorViewRouter;
