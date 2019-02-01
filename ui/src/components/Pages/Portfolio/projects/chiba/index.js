import React from 'react';
import A from '../../../../A';
import { logos } from '../../../../../assets/images';
import { cName } from '../../../Project';

const chibaWebSiteLink = (
  <A
    className={`${cName}__link`}
    href='http://www.chibabikefarm.com/'
    newTab
  >
    Chiba Bike Farm
  </A>
);

export default {
  id:       'chiba',
  title:    'Chiba Bike Farm',
  linkText: 'Chiba Bike Farm',
  linkImg: {
    request: {
      type: 'tag',
      name: 'chiba_link_img',
      tag: 'chiba_link_img',
    },
  },
  headerImg: {
    request: {
      type: 'tag',
      name: 'chiba_header_img',
      tag: 'chiba_header_img',
    },
  },
  gallery: {
    request: [{
      type: 'tag',
      name: 'chiba_gallery',
      tag: 'chiba_gallery',
      multiple: true,
      options: {
        max_results: 50,
      }
    }],
  },
  text: (
    <React.Fragment>
      <img src={logos.chibaLogo.src} />
      <p className={`${cName}__text--p`}>
        Wharncliffe Trailworks are currently undertaking a build project at {chibaWebSiteLink}, a downhill mountain bike destination in Celorico da Beira, Portugal. Nestled within a beautiful landscape of hills and gigantic granite boulders, Chiba is a fantastic resort that accommodates and caters for enthusiast riders. The line will utilise the unique landscape of the site to create a mix of raw downhill in the higher rocky sections, and open into a fun jump line of elegant doubles on the lower hill. Specified to be challenging at an advanced level but accessible to most clients, the ‘Scoundrelizer’ line will be a strong addition to the trails at Chiba.
      </p>
    </React.Fragment>
  ),
}
