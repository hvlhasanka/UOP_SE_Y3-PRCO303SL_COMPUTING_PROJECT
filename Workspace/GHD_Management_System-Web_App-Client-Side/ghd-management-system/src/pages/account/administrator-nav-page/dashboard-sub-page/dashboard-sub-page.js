import React from 'react';

import './dashboard-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import TabMainTitle from '../../../../components/tab-main-heading/tab-main-title';

const DashboardSubPage = () => {

  return(
    <div className='dashboard-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="dashboard-content-card">
          <TabMainTitle tabTitle="Dashboard" className="tab-heading-title" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default DashboardSubPage;
