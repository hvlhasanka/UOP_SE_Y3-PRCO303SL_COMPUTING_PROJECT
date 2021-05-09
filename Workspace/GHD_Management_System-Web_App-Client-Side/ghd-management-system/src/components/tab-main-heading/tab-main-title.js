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
