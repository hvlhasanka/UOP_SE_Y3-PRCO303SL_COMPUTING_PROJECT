/**
 * GHD Management System - React Web App
 * PAGE | END USER - ADMINISTRATOR | Dashboard Sub Page
 */
import React from 'react';

import styles from './dashboard-sub-page.module.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const DashboardSubPage = () => {

  return(
    <div className={styles.dashboardSubPage}>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className={styles.dashboardContentCard}>
          {/* <TabMainTitle tabTitle="Dashboard" className="tab-heading-title" /> */}
          <ComingSoonBlock className="coming-soon-component" pageTitle="Dashboard" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default DashboardSubPage;
