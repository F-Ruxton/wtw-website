import React from 'react';
import './styles.css';

const cName = 'FillPageBox';

const FillPageBox = ({ children }) => (
  <div className={cName}>
    {children}
  </div>
);

export default FillPageBox;
