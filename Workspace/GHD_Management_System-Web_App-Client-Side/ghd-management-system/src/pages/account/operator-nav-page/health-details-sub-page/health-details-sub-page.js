import React from 'react';

import './health-details-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const HealthDetailsSubPage = () => {

  return(
    <div className='health-details-sub-page'>
      <NavPageSidebar sidebarRoleType="operator">
        <div className="health-details-content-card">
          Operator - Health Details
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default HealthDetailsSubPage;
