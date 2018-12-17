import React from 'react';
import _ from 'lodash/fp';
import Logo from '../Logo';
import { MEDIUM } from '../../utils/sizes';
import './styles.css';

const cName = 'Loading';

export default function Loading (props) {
  const {
    size = MEDIUM,
    msg,
  } = props;

  return (
    <div className={cName}>
      <Logo size={size} />
      { !_.isEmpty(msg) &&
        <div className={`${cName}__msg`}>
          {msg}
        </div> }
    </div>
  );
}
