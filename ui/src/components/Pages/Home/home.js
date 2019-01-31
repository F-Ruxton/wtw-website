import React, { Fragment } from 'react';
import _ from 'lodash/fp';
import Landing from '../../Landing';
import LandingNav from '../../LandingNav';
import routes from '../routes';
import ScrollTo from '../../ScrollTo';
import withImageFetch from '../../../utils/images/withImageFetch';
import imageRequest, { landingImageTags } from './imageRequest';
import './styles.css';

// const cName = 'Home';

export const LANDING = 'LANDING';
export const ABOUT = 'ABOUT';
export const CONTACT = 'CONTACT';

const isHomePageSection = section => _.includes(section, [LANDING, ABOUT, CONTACT]);

const links = [
  {
    to: routes.about,
    tag: landingImageTags.landing_about,
    linkText: 'About Us',
    gradient: 'linear-gradient(55deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
  },
  {
    to: routes.portfolio,
    tag: landingImageTags.landing_portfolio,
    linkText: 'Portfolio'
  },
  {
    to: routes.contact,
    tag: landingImageTags.landing_contact,
    linkText: 'Contact'
  },
];

const Home = ({ images = {}, section }) => {
  const isHomePageSect   = isHomePageSection(section);
  const { landing_main } = images;
  const linksWithImgs    = _.map(link => ({ ...link, img: images[link.tag] }), links);

  return (
    <Fragment>
      <ScrollTo scrollOnMount={isHomePageSect && section === LANDING}>
        <Landing img={landing_main} />
      </ScrollTo>

      <LandingNav linksWithImgs={linksWithImgs} />
    </Fragment>
  );
};

export default withImageFetch(imageRequest, Home);
