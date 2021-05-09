/**
 * GHD Management System - React Web App | END USERS - ADMINISTRATOR & OPERATOR
 */
import './App.css';

import AuthenticationRouter from './router/authentication-router';

function App() {
  return (
    <div className="GHD-Management-System-App">
      <AuthenticationRouter />
    </div>
  );
}

export default App;
