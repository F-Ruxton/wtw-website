import React from 'react';
import classNames from 'classnames';
import Logo from '../Logo';
import { MEDIUM } from '../../utils/sizes';
import './styles.css';

const cName = 'Masthead';

export default function Masthead (props) {
  const {
    size = MEDIUM,
  } = props;

  return (
    <div className={cName}>
      <Logo size={size} />
      <div className={classNames(`${cName}__text`, `${cName}__text--large`)}>
        WHARNCLIFFE TRAILWORKS
      </div>
      <div className={classNames(`${cName}__text`, `${cName}__text--small`)}>
        WTW
      </div>
    </div>
  );
}
