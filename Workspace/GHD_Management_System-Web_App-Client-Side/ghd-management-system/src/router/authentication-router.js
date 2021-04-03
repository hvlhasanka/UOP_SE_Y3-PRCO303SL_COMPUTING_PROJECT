import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/auth/login/login';
import AdministratorViewRouter from './administrator-view-router';
import OperatorViewRouter from './operator-view-router';
import PageNotFound from '../pages/error/page-not-found/page-not-found';

function AuthenticationRouter() {

  return (
    <Router>
      <div className="GHD-Management-System-App_Auth">
        <Switch>
          <Route path="/login" exact component={ Login } />
          <Route path="/admin" component={ AdministratorViewRouter } />
          <Route path="/operator" component={ OperatorViewRouter } />
          <Redirect from="/" exact to="/login" />
          <Route component={ PageNotFound } />
        </Switch>
      </div>
    </Router>
  );
  
}

export default AuthenticationRouter;
