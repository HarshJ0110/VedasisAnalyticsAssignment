import React from 'react';
import "./scrolltable.css"

const ScrollTable = ({ children }) => {
  return (
    <div className='scroll_bar' >
      {children}
    </div>
  );
};

export default ScrollTable;