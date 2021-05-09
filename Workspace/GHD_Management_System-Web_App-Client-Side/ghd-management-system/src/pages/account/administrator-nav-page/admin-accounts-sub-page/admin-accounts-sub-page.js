/**
 * GHD Management System - React Web App
 * PAGE | END USER - ADMINISTRATOR | Admin Accounts Sub Page
 */
import React from 'react';

import './admin-accounts-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const AdminAccountsSubPage = () => {

  return(
    <div className='admin-accounts-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="admin-accounts-content-card">
          <ComingSoonBlock className="coming-soon-component" pageTitle="Admin Accounts" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default AdminAccountsSubPage;
