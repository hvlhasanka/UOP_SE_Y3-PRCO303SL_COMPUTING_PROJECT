import React from 'react';

import './feedback-reports-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const FeedbackReportsSubPage = () => {

  return(
    <div className='feedback-reports-sub-page'>
      <NavPageSidebar>
        <div className="feedback-reports-content-card">
          ADMIN - Feedback Reports
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default FeedbackReportsSubPage;
