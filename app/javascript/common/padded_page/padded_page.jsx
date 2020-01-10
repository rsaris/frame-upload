import React from 'react';

import './padded_page.scss';

const PaddedPage = ({ children, heading }) => (
  <div className="PaddedPage">
    {heading && <h1>{heading}</h1>}

    <div className="PaddedPage__body">
      {children}
    </div>
  </div>
);

export default PaddedPage;
