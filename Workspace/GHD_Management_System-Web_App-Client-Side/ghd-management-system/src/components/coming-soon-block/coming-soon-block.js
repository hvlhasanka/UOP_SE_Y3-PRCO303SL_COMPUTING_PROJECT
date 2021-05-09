import React from 'react';

import './coming-soon-block.css';

function ComingSoonBlock({
  className,
  pageTitle
}) {

  return(
    <div className={`coming-soon-block ${className}`}>
      <p className="coming-soon-text">{pageTitle} - COMING SOON</p>
    </div>
  );

}

export default ComingSoonBlock;
