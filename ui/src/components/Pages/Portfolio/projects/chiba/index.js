import React from 'react';
import { cName } from '../../../Project';

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
      <p className={`${cName}__text--p`}>
        Wharncliffe Trailworks are currently undertaking a build project at Chiba Bike Farm, a downhill mountain bike destination in Celorico da Beira, Portugal. Nestled within a beautiful landscape of hills and gigantic granite boulders, Chiba is a fantastic resort that accommodates and caters for enthusiast riders. The line will utilise the unique landscape of the site to create a mix of raw downhill in the higher rocky sections, and open into a fun jump line of elegant doubles on the lower hill. Specified to be challenging at an advanced level but accessible to most clients, the ‘Scoundrelizer’ line will be a strong addition to the trails at Chiba.
      </p>
    </React.Fragment>
  ),
}
