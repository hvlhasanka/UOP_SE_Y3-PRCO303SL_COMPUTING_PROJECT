/**
 * GHD Management System - React Web App
 * NAVIGATION DATA - Nav Page Sidebar Navigation - Administrator - 1
 */
import React from 'react'

import DashboardIcon from '@material-ui/icons/Dashboard';
import FeedbackIcon from '@material-ui/icons/Feedback';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const AdminSidebarSectionOne = [
  {
    title: "DASHBOARD",
    icon: <DashboardIcon fontSize="large" />,
    url: "/admin/dashboard"
  },
  {
    title: "FEEDBACK REPORTS",
    icon: <FeedbackIcon fontSize="large"  />,
    url: "/admin/feedback-reports"
  },
  {
    title: "OPERATOR ACCOUNTS",
    icon: <AccountBoxIcon fontSize="large"  />,
    url: "/admin/operator-accounts"
  },
  {
    title: "ADMIN ACCOUNTS",
    icon: <AccountCircleIcon fontSize="large"  />,
    url: "/admin/admin-accounts"
  }
];

export default AdminSidebarSectionOne;
