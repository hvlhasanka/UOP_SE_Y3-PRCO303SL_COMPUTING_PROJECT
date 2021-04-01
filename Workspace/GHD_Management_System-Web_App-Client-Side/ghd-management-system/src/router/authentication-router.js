import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../pages/auth/login/login';

function AuthenticationRouter() {

  return (
    <Router>
      <div className="GHD-Management-System-App_Auth">
        <Switch>
          <Route path="/" exact component={ Login } />
        </Switch>
      </div>
    </Router>
  );
}

export default AuthenticationRouter;
