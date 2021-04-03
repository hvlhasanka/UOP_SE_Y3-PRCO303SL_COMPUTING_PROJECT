import React from 'react';

import './dashboard-sub-page.css';

import AdministratorNavPage from '../administrator-nav-page';

const DashboardSubPage = () => {

  return(
    <div className='dashboard-sub-page'>
      
      <AdministratorNavPage>
        ADMIN
      </AdministratorNavPage>

    </div>
  );

}

export default DashboardSubPage;
