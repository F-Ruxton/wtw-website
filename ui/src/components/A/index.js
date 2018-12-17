import React from 'react';
import _ from 'lodash/fp';
import classNames from  'classnames';
import { Link } from 'react-router-dom';
import './styles.css';

const cName = 'Anchor';

const A = ({
  href = '',
  to = '',
  onClick,
  children,
  className,
  newTab = false,
  style = {},
}) => {
  if (!_.isEmpty(href)) {
    return (
      <a
        className={classNames(cName, className, `${cName}__link`)}
        href={href}
        target={newTab ? '_blank' : ''}
        style={style}
      >
        {children}
      </a>
    );
  }

  if (!_.isEmpty(to)) {
    return (
      <Link
        to={to}
        className={classNames(cName, className, `${cName}__link`)}
        style={style}
      >
        {children}
      </Link >
    );
  }

  if (_.isFunction(onClick)) {
    return (
      <button
        onClick={onClick}
        className={classNames(cName, className, `${cName}__button`)}
        style={style}
      >
        {children}
      </button>
    )
  }

  return (
    <div
      className={classNames(cName, className, `${cName}__no-link`)}
      style={style}
    >
      {children}
    </div>
  );
}

export default A;
