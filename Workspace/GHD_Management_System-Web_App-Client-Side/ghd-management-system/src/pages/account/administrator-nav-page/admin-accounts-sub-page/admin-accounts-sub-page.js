import React from 'react';

import './admin-accounts-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const AdminAccountsSubPage = () => {

  return(
    <div className='admin-accounts-sub-page'>
      <NavPageSidebar>
        <div className="admin-accounts-content-card">
          ADMIN - Admin Accounts
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default AdminAccountsSubPage;
