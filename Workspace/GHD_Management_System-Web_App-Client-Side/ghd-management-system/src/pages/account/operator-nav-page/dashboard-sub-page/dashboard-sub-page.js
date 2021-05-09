/**
 * GHD Management System - React Web App
 * PAGE | END USER - OPERATOR | Dashboard Sub Page
 */
import React from 'react';

import './dashboard-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const DashboardSubPage = () => {

  return(
    <div className='dashboard-sub-page'>
      <NavPageSidebar sidebarRoleType="operator">
        <div className="dashboard-content-card">
          Operator - Dashboard
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default DashboardSubPage;
