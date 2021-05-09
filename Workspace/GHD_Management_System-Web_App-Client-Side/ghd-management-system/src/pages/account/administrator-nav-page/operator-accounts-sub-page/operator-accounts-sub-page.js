/**
 * GHD Management System - React Web App
 * PAGE - Operator Accounts Sub Page
 */
import React from 'react';

import './operator-accounts-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const OperatorAccountsSubPage = () => {

  return(
    <div className='operator-accounts-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="operator-accounts-content-card">
          <ComingSoonBlock className="coming-soon-component" pageTitle="Operator Accounts" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default OperatorAccountsSubPage;
