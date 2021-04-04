import React from 'react';

import './settings-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const SettingsSubPage = () => {

  return(
    <div className='settings-sub-page'>
      <NavPageSidebar sidebarRoleType="operator">
        <div className="settings-content-card">
          Operator - Settings
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default SettingsSubPage;
