import React from 'react';

import './settings-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const SettingsSubPage = () => {

  return(
    <div className='settings-sub-page'>
      <NavPageSidebar>
        <div className="settings-content-card">
          Admin - Settings
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default SettingsSubPage;
