import React from 'react';
import classNames from 'classnames';
import './styles.css';

const cName = 'Header';

const Header = ({
  children,
  className,
  style = {},
}) => (
  <div
    className={classNames(cName, className)}
    style={style}
  >
    {children}
  </div>
);

export default Header;
