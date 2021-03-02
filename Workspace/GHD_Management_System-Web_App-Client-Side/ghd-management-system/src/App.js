import logo from './logo.svg';
import './App.css';

import Login from './pages/auth/login/login';
import AdministratorNavPage from './pages/account/administrator-nav-page/administrator-nav-page';
import OperatorNavPage from './pages/account/operator-nav-page/operator-nav-page';

function App() {
  return (
    <div className="GHD-Management-System-App">
   {/* <Login />*/}  
      <AdministratorNavPage />
      <OperatorNavPage />
    </div>
  );
}

export default App;
