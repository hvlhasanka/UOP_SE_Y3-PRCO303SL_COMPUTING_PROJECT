/**
 * GHD Management System - React Web App
 * PAGE | END USER - OPERATOR | Profile Sub Page
 */
import React from 'react';

import styles from './profile-sub-page.module.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const ProfileSubPage = () => {

  return(
    <div className={styles.profileSubPage}>
      <NavPageSidebar sidebarRoleType="operator">
        <div className={styles.profileContentCard}>
          Operator - Profile
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default ProfileSubPage;
