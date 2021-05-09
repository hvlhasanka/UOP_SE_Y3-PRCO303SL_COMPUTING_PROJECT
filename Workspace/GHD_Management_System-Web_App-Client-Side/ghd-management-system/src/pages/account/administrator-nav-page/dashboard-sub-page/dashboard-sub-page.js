import React from 'react';

import './dashboard-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const DashboardSubPage = () => {

  return(
    <div className='dashboard-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="dashboard-content-card">
          {/* <TabMainTitle tabTitle="Dashboard" className="tab-heading-title" /> */}
          <ComingSoonBlock className="coming-soon-component" pageTitle="Dashboard" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default DashboardSubPage;
