/**
 * GHD Management System - React Web App
 * PAGE | END USER - OPERATOR | Profile Sub Page
 */
import React from 'react';

import styles from './profile-sub-page.module.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const ProfileSubPage = () => {

  return(
    <div className={styles.profileSubPage}>
      <NavPageSidebar sidebarRoleType="operator">
        <div className="profile-content-card">
          <ComingSoonBlock className="coming-soon-component" pageTitle="Profile" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default ProfileSubPage;
