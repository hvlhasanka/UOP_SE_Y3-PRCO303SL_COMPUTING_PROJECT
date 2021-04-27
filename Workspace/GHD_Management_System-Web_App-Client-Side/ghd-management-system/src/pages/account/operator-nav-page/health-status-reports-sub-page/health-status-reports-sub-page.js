import React from 'react';

import './health-status-reports-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const HealthStatusReportsSubPage = () => {

  return(
    <div className='health-status-reports-sub-page'>
      <NavPageSidebar sidebarRoleType="operator">
        <div className="health-status-reports-content-card">
          Operator - Health Status Reports
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default HealthStatusReportsSubPage;
