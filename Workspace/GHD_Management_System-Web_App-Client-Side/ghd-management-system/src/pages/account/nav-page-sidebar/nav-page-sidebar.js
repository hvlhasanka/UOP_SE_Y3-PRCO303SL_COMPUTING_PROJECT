import React, { 
  useEffect, 
  useState
} from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router"
import { Redirect } from "react-router"

import './nav-page-sidebar.css';
import { 
  AdminSidebarSectionOne,
  AdminSidebarSectionTwo,
  OperatorSidebarSectionOne,
  OperatorSidebarSectionTwo
} from './nav-page-sidebar-data/index';
import logo from '../../../assets/logo/GHD-Management-System-Logo.png';

const NavPageSidebar = ({ sidebarRoleType, children }) => {

  const routeHistory = useHistory();
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const retrieveCurrentDateTime = () => {
    let currentDateTime = new Date();
    setCurrentTime(currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setCurrentDate(currentDateTime.toLocaleString('default', { day: '2-digit', month: 'short', year: 'numeric' }));
  }

  const handleLogout = () => {
    return <Redirect to="/login" />
  }

  useEffect(() => {
    // Retrieving current date and time for the initial render
    retrieveCurrentDateTime();
    // Creating an interval which is recalled every 30 seconds
    const timer = setInterval(() => { 
      // Retrieving current date and time every 30 seconds
      retrieveCurrentDateTime();
    }, 30 * 1000);
    return() => {
      // Clearing interval to clear timer
      clearInterval(timer);
    }
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
                <div className="top-row-left-column">
                  <p className="account-role-text">
                    {sidebarRoleType == "administrator" ? `ADMINISTRATOR` : `OPERATOR` }
                  </p>
                </div>
                <div className="top-row-right-column">
                  <div className="account-status-indicator"></div>
                </div>
              </div>
              <div className="header-sub-bottom-row">
                <div className="bottom-row-left-column">
                  <p className="current-date-time-text">{ currentTime }</p>
                </div>
                <div className="bottom-row-right-column">
                  <p className="current-date-time-text">{ currentDate }</p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-sidebar-sub-page-list">
            <div className="page-sub-page-section-one">
              <ul>
                {
                  (sidebarRoleType == "administrator" ? AdminSidebarSectionOne : OperatorSidebarSectionOne).map((val, key) => {
                    return (
                      <Link to={val.url} className="page-sidebar-sub-page-link">
                        <li 
                          id={ window.location.pathname == val.url ? "page-sidebar-sub-page-active" : ""}
                          key={ key } 
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
                  (sidebarRoleType == "administrator" ? AdminSidebarSectionTwo : OperatorSidebarSectionTwo).map((val, key) => {
                    return (
                      <Link to={val.url} className="page-sidebar-sub-page-link">
                        <li 
                          id={ window.location.pathname == val.url ? "page-sidebar-sub-page-active" : ""}
                          key={ key } 
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
                <Link onClick={() => handleLogout()} to="" className="page-sidebar-sub-page-link">
                  <li 
                    id="page-sidebar-logout"
                    className="page-sidebar-sub-page-button page-sidebar-logout-button"
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

export default NavPageSidebar;
