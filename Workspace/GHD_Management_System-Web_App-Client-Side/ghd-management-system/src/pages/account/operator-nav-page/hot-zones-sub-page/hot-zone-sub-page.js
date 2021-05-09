/**
 * GHD Management System - React Web App
 * PAGE | END USER - OPERATOR | Hot Zones Sub Page
 */
import React from 'react';

import './hot-zone-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const HotZonesSubPage = () => {

  return(
    <div className='hot-zone-sub-page'>
      <NavPageSidebar sidebarRoleType="operator">
        <div className="hot-zone-content-card">
          Operator - Hot Zone
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default HotZonesSubPage;
