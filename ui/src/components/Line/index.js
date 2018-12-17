import React from 'react';
import classnames from 'classnames';
import { HORIZONTAL, VERTICAL } from '../../shared/directions';
import './styles.css';

const cName = 'Line';

const Line = ({ direction = HORIZONTAL, style = {} }) => (
  <div
    className={classnames(cName, {
      [`${cName}__horizontal`]: direction === HORIZONTAL,
      [`${cName}__vertical`]: direction === VERTICAL,
    })}
    style={style}
  />
)

export default Line;
