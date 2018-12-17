import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import './styles.css';

const cName = 'Image';

const Image = ({
  image = {
    src: '',
    alt: '',
  },
  style = {},
  className = '',
  withBorder = true,
}) => (
  <img
    className={
      classNames(
        cName,
        {
          [className]: !_.isEmpty(className),
          [`${cName}__bordered`]: withBorder,
        }
      )
    }
    style={style}
    src={image.src}
    alt={image.alt}
  />
);

export default Image;
