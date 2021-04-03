import React, { 
  useEffect, 
  useState
} from 'react';
import { Link } from 'react-router-dom';

import './administrator-nav-page.css';
import { 
  AdminSidebarSectionOne,
  AdminSidebarSectionTwo
} from './nav-page-sidebar-data/index';
import logo from '../../../assets/logo/GHD-Management-System-Logo.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const AdministratorNavPage = ({ children }) => {

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const retrieveCurrentDateTime = () => {
    let currentDateTime = new Date();
    setCurrentDate(currentDateTime.getDate() + " / " + currentDateTime.getMonth()+1 + " / " + currentDateTime.getFullYear());
    setCurrentTime(currentDateTime.getHours() + " : " + currentDateTime.getMinutes() + " " + (currentDateTime.getHours >= 12 ? "PM" : "AM"));
  }

  useEffect(() => {
    retrieveCurrentDateTime();
  }, [])

  return(
    <div className='administrator-nav-page'>
      <div className="page-sidebar">
        <div className="page-sidebar-content">
          <div className="page-sidebar-header">
            <div className="page-sidebar-header-main">
              <img src={logo} alt="GHD Management System Logo" className="sidebar__ghd-management-system-logo" />
            </div>
            <div className="page-sidebar-header-sub">
              <div className="header-sub-top-row">
                <div class="top-row-left-column">
                  <p className="account-role-text">ADMINISTRATOR</p>
                </div>
                <div class="top-row-right-column">
                  <div className="account-status-indicator"></div>
                </div>
              </div>
              <div className="header-sub-bottom-row">
                <div class="bottom-row-left-column">
                  <p className="current-date-time-text">{ currentDate }</p>
                </div>
                <div class="bottom-row-right-column">
                  <p className="current-date-time-text">{ currentTime }</p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-sidebar-sub-page-list">
            <div className="page-sub-page-section-one">
              <ul>
                {
                  AdminSidebarSectionOne.map((val, key) => {
                    return (
                      <Link to={val.url} className="page-sidebar-sub-page-link">
                        <li 
                          id={ window.location.pathname == val.url ? "page-sidebar-sub-page-active" : ""}
                          key={key} 
                          className="page-sidebar-sub-page-button"
                        >
                          <div id="page-sidebar-icon">{ val.icon }</div>
                          <div id="page-sidebar-title">{ val.title }</div>
                        </li>
                      </Link>
                    );
                  })
                }
              </ul>
            </div>
            <div className="page-sidebar-sub-page-section-two">
              <ul>
                {
                  AdminSidebarSectionTwo.map((val, key) => {
                    return (
                      <Link to={val.url} className="page-sidebar-sub-page-link">
                        <li 
                          id={ window.location.pathname == val.url ? "page-sidebar-sub-page-active" : ""}
                          key={key} 
                          className="page-sidebar-sub-page-button"
                        >
                          <div id="page-sidebar-icon">{ val.icon }</div>
                          <div id="page-sidebar-title">{ val.title }</div>
                        </li>
                      </Link>
                    );
                  })
                }
              </ul>
            </div>
            <div className="page-sidebar-sub-page-section-three">
              <ul>
                <Link to="" className="page-sidebar-sub-page-link">
                  <li 
                    id="page-sidebar-logout"
                    className="page-sidebar-sub-page-button"
                  >
                    <div id="page-sidebar-icon">
                      <div className="page-sidebar-title-logout-icon">
                        <ArrowBackIosIcon fontSize="large" />
                      </div>
                    </div>
                    <div id="page-sidebar-title">
                      <p className="page-sidebar-title-logout-text">LOGOUT</p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="page-sub-page-content">
        {children}
      </div>

    </div>
  );

}

export default AdministratorNavPage;
