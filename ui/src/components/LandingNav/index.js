import React from 'react';
import classNames from 'classnames';
import _ from 'lodash/fp';
import LinkImage from '../LinkImage';
import './styles.css';

const cName = 'LandingNav';

const LandingNav = ({ className, linksWithImgs = [] }) => (
  <div className={classNames(className, `${cName}__links`)}>
    { _.map(link => (
      <LinkImage
        key={link.to}
        className={`${cName}__link`}
        {...link}
        style={{ opacity: 0.8 }}
      />
    ), linksWithImgs) }
  </div>
);

export default LandingNav;
