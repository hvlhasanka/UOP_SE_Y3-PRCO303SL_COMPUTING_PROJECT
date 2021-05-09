/**
 * GHD Management System - React Web App
 * PAGE | END USER - OPERATOR | Health Details Sub Page
 */
import React from 'react';

import './health-details-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const HealthDetailsSubPage = () => {

  return(
    <div className='health-details-sub-page'>
      <NavPageSidebar sidebarRoleType="operator">
        <div className="health-details-content-card">
          <ComingSoonBlock className="coming-soon-component" pageTitle="Health Details" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default HealthDetailsSubPage;
