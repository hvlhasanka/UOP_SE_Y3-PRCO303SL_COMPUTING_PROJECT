import React from 'react';

import './operator-accounts-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const OperatorAccountsSubPage = () => {

  return(
    <div className='operator-accounts-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="operator-accounts-content-card">
          ADMIN - Operator Accounts
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default OperatorAccountsSubPage;
