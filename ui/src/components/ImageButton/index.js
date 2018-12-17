import React from 'react';
import './styles.css';

const cName = 'ImageButton';

export default function ImageButton (props) {
  const {
    text,
    src,
    textStyle = {},
    imgStyle = {},
  } = props;

  return (
    <div className={cName}>
      <div
        className={`${cName}__text`}
        style={textStyle}
      >
        { text }
      </div>
      { src &&
        <img
          className={`${cName}__img`}
          src={src}
          alt={`Button: ${text}`}
          style={imgStyle}
        /> }
    </div>
  );
}
