import React from 'react';

import './heading-two.css';

const HeadingTwo = ({
  headingTitle,
  className
}) => {

  return(
    <h2 className={`headingTwo ${className}`}>{headingTitle}</h2>
  );

}

export default HeadingTwo;
