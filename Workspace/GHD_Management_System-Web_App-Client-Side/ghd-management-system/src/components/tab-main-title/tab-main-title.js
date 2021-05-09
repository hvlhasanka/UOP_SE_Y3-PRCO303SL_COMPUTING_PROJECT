/**
 * GHD Management System - React Web App
 * COMPONENT | END USERS - ADMINISTRATOR & OPERATOR | Tab Main Title Component
 */
import React from 'react';

import './tab-main-title.css';

function TabMainTitle({
  tabTitle,
  className
}) {

  return(
    <h2 className={`tab-title ${className}`}>{tabTitle}</h2>
  );

}

export default TabMainTitle;
