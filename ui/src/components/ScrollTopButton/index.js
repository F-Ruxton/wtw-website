import React from 'react';
import classNames from 'classnames';
import { icons } from '../../assets/images';
import Image from '../Image';
import './styles.css';

const cName = 'ScrollTopButton';

const ScrollTopButton = ({
  text = 'Back to top',
  showText = false,
  className,
  style = {},
}) => (
  <span
    className={classNames(cName, className)}
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
    style={style}
    title={text}
  >
    <Image
      image={icons.arrow_up}
      withBorder={false}
      style={{ height: 30 }}
    />
    { showText && <span className={`${cName}__text`}>{text}</span> }
  </span>
);

export default ScrollTopButton;
