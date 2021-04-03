import React from 'react'

import PersonPinIcon from '@material-ui/icons/PersonPin';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

const OperatorSidebarSectionTwo = [
  {
    title: "PROFILE",
    icon: <PersonPinIcon fontSize="large"  />,
    url: "/admin/profile"
  },
  {
    title: "SETTINGS",
    icon: <SettingsApplicationsIcon fontSize="large"  />,
    url: "/admin/settings"
  }
];

export default OperatorSidebarSectionTwo;
