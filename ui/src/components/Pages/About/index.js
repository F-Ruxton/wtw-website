import React, { Fragment } from 'react';
import _ from 'lodash/fp';
import Team from './team';
import sections from './sections';
import Gallery from '../../Gallery';
import Header from '../../Header';
import FillImage from '../../FillImage';
import imageRequest from './imageRequest';
import withImageFetch from '../../../utils/images/withImageFetch';
import './styles.css';

export const ABOUT = 'ABOUT';

const cName = 'About';

const { company } = sections;

const AboutSection = ({ section }) => (
  <div className={`${cName}__text-sections--section`}>
  { !_.eq(section.heading, 'About Us') && (
    <h1 className={`${cName}__heading`}>
      {section.heading}
    </h1>
  ) }

    {section.text}
  </div>
);



const About = ({ images = {} }) => {
  const {
    about_header_img,
    about_gallery : about_gallery_imgs,
    about_team    : about_team_imgs,
  } = images;

  return (
    <Fragment>
      { about_header_img && (
        <div className={`${cName}__main-img`}>
          <FillImage
            className={`${cName}__img`}
            image={{ src: _.get('url', about_header_img) }}
          />
        </div> ) }

      <div className={`${cName}__text-sections`}>
        <AboutSection section={company} />
      </div>

      <div className={`${cName}__gallery`}>
        <Gallery images={about_gallery_imgs} />
      </div>


      <Team images={about_team_imgs} />

      {/* <div className={`${cName}__process`}>
        <AboutSection section={process} />
      </div> */}

    </Fragment>
  );
}

export default function () {

  const AboutPageWithFetch =  withImageFetch(imageRequest, About)

  return (
    <div className={cName}>
      <Header>About Us</Header>

      <AboutPageWithFetch />
    </div>
  )
};
