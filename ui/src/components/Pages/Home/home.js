import React from 'react';
import _ from 'lodash/fp';
import Landing from '../../Landing';
import aboutSections from '../About/sections';
import routes from '../routes';
import ScrollTo from '../../ScrollTo';
import LinkImage from '../../LinkImage';
import withImageFetch from '../../../utils/images/withImageFetch';
import imageRequest, { landingImageTags } from './imageRequest';
import './styles.css';

const cName = 'Home';

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
    <React.Fragment>

      <ScrollTo scrollOnMount={isHomePageSect && section === LANDING}>
        <Landing img={landing_main} />
      </ScrollTo>

      <div className={`${cName}__about-text`}>
        {aboutSections.company.text}
      </div>

      <div className={`${cName}__links`}>
        { _.map(link => (
          <LinkImage
            key={link.to}
            className={`${cName}__link`}
            {...link}
            style={{ opacity: 0.8 }}
          />
        ), linksWithImgs) }
      </div>

    </React.Fragment>
  );
};

export default withImageFetch(imageRequest, Home);
