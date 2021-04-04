import React from 'react';

import './profile-sub-page.css';
import NavPageSidebar from '../../nav-page-sidebar/nav-page-sidebar';

const ProfileSubPage = () => {

  return(
    <div className='profile-sub-page'>
      <NavPageSidebar>
        <div className="profile-content-card">
          Admin - Profile
        </div>
      </NavPageSidebar>
    </div>
  );

}

export default ProfileSubPage;
