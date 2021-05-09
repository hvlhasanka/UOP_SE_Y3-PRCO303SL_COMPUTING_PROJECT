/**
 * GHD Management System - React Web App
 * PAGE | END USER - ADMINISTRATOR | Profile Sub Page
 */
import React from 'react';

import './profile-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const ProfileSubPage = () => {

  return(
    <div className='profile-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="profile-content-card">
          <ComingSoonBlock className="coming-soon-component" pageTitle="Profile" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default ProfileSubPage;
