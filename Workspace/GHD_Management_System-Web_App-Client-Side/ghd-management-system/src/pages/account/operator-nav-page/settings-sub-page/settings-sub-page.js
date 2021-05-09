/**
 * GHD Management System - React Web App
 * PAGE | END USER - OPERATOR | Settings Sub Page
 */
import React from 'react';

import styles from './settings-sub-page.module.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const SettingsSubPage = () => {

  return(
    <div className={styles.settingsSubPage}>
      <NavPageSidebar sidebarRoleType="operator">
        <div className={styles.settingsContentCard}>
          Operator - Settings
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default SettingsSubPage;
