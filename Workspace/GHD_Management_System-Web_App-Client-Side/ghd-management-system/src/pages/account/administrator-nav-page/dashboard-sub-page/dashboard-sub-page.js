import React from 'react';

import './dashboard-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const DashboardSubPage = () => {

  return(
    <div className='dashboard-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="dashboard-content-card">
          <p>
            ADMIN - Dashboard
          </p>
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default DashboardSubPage;
