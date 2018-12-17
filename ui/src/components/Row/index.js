import React from 'react';
import classNames from 'classnames';
import './styles.css';

const cName = 'Row';

const Row = ({ children, style = {}, className }) => (
  <div className={classNames(cName, className)} style={style}>
    {children}
  </div>
);

export default Row;
