/**
 * GHD Management System - React Web App
 * PAGE - Settings Sub Page
 */
import React from 'react';

import './settings-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const SettingsSubPage = () => {

  return(
    <div className='settings-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="settings-content-card">
          <ComingSoonBlock className="coming-soon-component" pageTitle="Settings" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default SettingsSubPage;
