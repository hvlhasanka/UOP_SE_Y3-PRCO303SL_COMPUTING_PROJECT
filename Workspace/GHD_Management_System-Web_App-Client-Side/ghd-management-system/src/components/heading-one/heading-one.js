/**
 * GHD Management System - React Web App
 * COMPONENT - Heading One Component
 */
import React from 'react';

import './heading-one.css';

function HeadingOne({
  headingTitle,
  className
}) {

  return(
    <h1 className={`headingOne ${className}`}>{headingTitle}</h1>
  );

}

export default HeadingOne;
