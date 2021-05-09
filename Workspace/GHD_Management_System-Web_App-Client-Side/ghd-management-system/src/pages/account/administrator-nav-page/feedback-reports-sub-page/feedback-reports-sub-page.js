import React from 'react';

import './feedback-reports-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';
import { ComingSoonBlock } from '../../../../components';

const FeedbackReportsSubPage = () => {

  return(
    <div className='feedback-reports-sub-page'>
      <NavPageSidebar sidebarRoleType="administrator">
        <div className="feedback-reports-content-card">
          <ComingSoonBlock className="coming-soon-component" pageTitle="Feedback Reports" />
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default FeedbackReportsSubPage;
