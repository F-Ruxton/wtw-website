import React from 'react';
import Header from '../../Header';
import A from '../../A';
import pages from '../';
import './styles.css';

const cName = 'NotFoundPage';

const NotFoundPage = () => (
  <div className={cName}>
    {/* <div className={`${cName}__image`}>
      <FillImage />
    </div> */}

    <div className={`${cName}__text`}>
      <Header className={`${cName}__header`}>Page not found.</Header>

      <A to={pages.home.path} className={`${cName}__home-link`}>
        Home
      </A>
    </div>
  </div>
);

export default NotFoundPage;
