import React from 'react';

import './heading-two.css';

const HeadingTwo = ({
  headingTitle,
  boldText,
  className
}) => {

  return(
    <h2 className={`headingTwo ${className}`}>{headingTitle} <b>{boldText}</b></h2>
  );

}

export default HeadingTwo;
