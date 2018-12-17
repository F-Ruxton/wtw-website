import React from 'react';
import _ from 'lodash/fp';
import Image from '../Image';
import Row from '../Row';
import A from '../A';
import './styles.css';

const cName = 'Sprite';

const Sprite = ({
  imageProps = {},
  linkProps = {},
  children,
  rowStyle = {},
}) => (
  <div className={cName}>
    <A {...linkProps}>
      <Row style={rowStyle}>
        <Image className={`${cName}__img`} {...imageProps} />

        { !_.isEmpty(children) && <div className={`${cName}__children`}>{children}</div> }
      </Row>
    </A>
  </div>
);

export default Sprite;
