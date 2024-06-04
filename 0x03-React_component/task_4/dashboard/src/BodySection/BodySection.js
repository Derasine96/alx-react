import React from 'react';
// import Proptypes from 'prop-types';

const BodySection = ({ title, children }) => {
    return (
      <div className="bodySection">
        <h2>{title}</h2>
        {children}
      </div>
    );
  };
  
  export default BodySection;