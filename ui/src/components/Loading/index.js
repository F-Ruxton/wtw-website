import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import Logo from '../Logo';
import { MEDIUM } from '../../utils/sizes';
import './styles.css';

const cName = 'Loading';

export default function Loading (props) {
  const {
    size = MEDIUM,
    msg,
    className,
    style,
  } = props;

  return (
    <div className={classNames(cName, className)} style={style}>
      <Logo className={`${cName}__logo`} size={size} />
      { !_.isEmpty(msg) &&
        <div className={`${cName}__msg`}>
          {msg}
        </div> }
    </div>
  );
}
