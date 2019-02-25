import React, { Fragment } from 'react';
import _ from 'lodash/fp';
import Row from '../Row';
import A from '../A';
import Sprite from '../Sprite';
import ScrollTopButton from '../ScrollTopButton';
import { icons } from '../../assets/images';
import  getContact, { contactTypes, contactNames } from '../../utils/contacts';
import './styles.css';
import routes from '../Pages/routes';

const cName = 'Footer'

const credits = [
  {
    image: icons.angleBrackets,
    text: `Website - ${getContact(contactTypes.FULL_NAME, contactNames.FRED)}`,
  },
  {
    image: icons.camera,
    text: (
      <Fragment>
        <span>Photos - </span>
        <A
          to={getContact(contactTypes.WEBSITE, contactNames.KIERAN)}
          className={`${cName}__credit--link`}
        >
          {getContact(contactTypes.FULL_NAME, contactNames.KIERAN)}
        </A>
        <span> and WTW</span>
      </Fragment>
    ),
  }
];

const siteLinks = [
  [routes.home,      'Home'],
  [routes.about,     'About'],
  [routes.portfolio, 'Portfolio'],
  [routes.contact,   'Contact'],
];

const SiteLinks = () => (
  <div className={`${cName}__link--ctr`}>
    { _.map(([to, text]) => (
      <div className={`${cName}__link--link`} key={to}>
        <A to={to}>{text}</A>
      </div>
    ), siteLinks) }
  </div>
);

export default function Footer(props) {
  return (
    <div className={cName}>
      <Row className={`${cName}__row-main`}>

        <ScrollTopButton
          className={`${cName}__scroll-top--left`}
          showText
        />

        <div className={`${cName}__links`}>

          <div className={`${cName}__site-links`}>
            <div className={`${cName}__title`}>
              Site Links
            </div>

            <SiteLinks />
          </div>

          <div className={`${cName}__social-media`}>

            <div className={`${cName}__title`}>
              Social Media
            </div>

            <div className={`${cName}__link--ctr`}>
              <Sprite
                imageProps={{
                  image: icons.instagramLogo,
                  withBorder: false,
                  style: { height: 25, width: 25 }
                }}
                linkProps={{
                  href: getContact(contactTypes.INSTAGRAM, contactNames.COMPANY),
                  newTab: true,
                }}
                rowStyle={{ width: 'fit-content' }}
              >
                <span>Instagram</span>
              </Sprite>
            </div>

          </div>

        </div>

        <div className={`${cName}__last-section`}>
          <ScrollTopButton
            className={`${cName}__scroll-top--right`}
            showText
          />

          <div className={`${cName}__credits`}>

            <div className={`${cName}__credit`}>
              &copy; Wharncliffe Trailworks | {(new Date()).getFullYear()}
            </div>

            {
              _.map(({ image, text, linkProps }) => (
                <div className={`${cName}__link ${cName}__credit`} key={text}>
                  <Sprite
                    linkProps={{}}
                    imageProps={{
                      image: image,
                      withBorder: false,
                      style: {
                        height: 20,
                        width: 20,
                        marginRight: 10,
                        background: 'white',
                      }
                      }}
                      rowStyle={{ justifyContent: 'flex-end' }}
                    >
                      <span className={`${cName}__credit-text`}>{text}</span>
                    </Sprite>
                  </div>
                ), credits)
            }

          </div>
        </div>

      </Row>
    </div>
  );
}
