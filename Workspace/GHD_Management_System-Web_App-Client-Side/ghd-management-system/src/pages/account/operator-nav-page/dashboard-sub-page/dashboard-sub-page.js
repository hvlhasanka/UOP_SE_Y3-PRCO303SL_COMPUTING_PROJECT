/**
 * GHD Management System - React Web App
 * PAGE | END USER - OPERATOR | Dashboard Sub Page
 */
import React from 'react';

import styles from './dashboard-sub-page.module.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const DashboardSubPage = () => {

  return(
    <div className={styles.dashboardSubPage}>
      <NavPageSidebar sidebarRoleType="operator">
        <div className={styles.dashboardContentCard}>
          Operator - Dashboard
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default DashboardSubPage;
