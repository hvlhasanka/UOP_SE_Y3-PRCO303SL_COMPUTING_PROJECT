/**
 * GHD Management System - React Web App
 * PAGE | END USER - ADMINISTRATOR | Settings Sub Page
 */
import React from 'react';

import styles from './settings-sub-page.module.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const SettingsSubPage = () => {

  return(
    <div className={styles.settingsSubPage}>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className={styles.settingsContentCard}>
          <ComingSoonBlock className="coming-soon-component" pageTitle="Settings" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default SettingsSubPage;
