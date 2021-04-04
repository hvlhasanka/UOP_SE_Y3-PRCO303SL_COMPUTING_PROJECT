import React from 'react'

import DashboardIcon from '@material-ui/icons/Dashboard';
import FeedbackIcon from '@material-ui/icons/Feedback';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const OperatorSidebarSectionOne = [
  {
    title: "DASHBOARD",
    icon: <DashboardIcon fontSize="large" />,
    url: "/operator/dashboard"
  },
  {
    title: "HEALTH DETAILS",
    icon: <FeedbackIcon fontSize="large"  />,
    url: "/operator/health-details"
  },
  {
    title: "HEALTH STATUS REPORTS",
    icon: <AccountBoxIcon fontSize="large"  />,
    url: "/operator/health-status-reports"
  },
  {
    title: "HOT ZONES",
    icon: <AccountCircleIcon fontSize="large"  />,
    url: "/operator/hot-zones"
  }
];

export default OperatorSidebarSectionOne;
