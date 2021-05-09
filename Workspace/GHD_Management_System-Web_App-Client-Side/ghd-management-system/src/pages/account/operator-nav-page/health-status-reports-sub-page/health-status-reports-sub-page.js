/**
 * GHD Management System - React Web App
 * PAGE | END USER - OPERATOR | Health Status Reports Sub Page
 */
import React from 'react';

import './health-status-reports-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const HealthStatusReportsSubPage = () => {

  return(
    <div className='health-status-reports-sub-page'>
      <NavPageSidebar sidebarRoleType="operator">
        <div className="health-status-reports-content-card">
          <ComingSoonBlock className="coming-soon-component" pageTitle="Health Status Reports" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default HealthStatusReportsSubPage;
