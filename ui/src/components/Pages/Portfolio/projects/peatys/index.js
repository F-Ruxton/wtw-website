import React from 'react';
import { cName } from '../../../Project';

export default {
  id:       'peatys',
  title:    'Peatys',
  name:     'Peatys',
  linkText: 'Peatys',
  linkImg: {
    request: {
      type: 'tag',
      name: 'peatys_link_img',
      tag: 'peatys_link_img',
    },
  },
  headerImg: {
    request: {
      type: 'tag',
      name: 'peatys_header_img',
      tag: 'peatys_header_img',
    },
  },
  gallery: {
    request: [{
      type: 'tag',
      name: 'peatys_gallery',
      tag: 'peatys_gallery',
      multiple: true,
      options: {
        max_results: 50,
      }
    }],
  },
  text: (
    <React.Fragment>
      <p className={`${cName}__text--p`}>
        Wharncliffe Trailworks was fortunate enough to secure the contract to build a private jump line for legendary former DH World Champion Steve Peat.
      </p>
      <p className={`${cName}__text--p`}>
        Design brief
      </p>
      <p className={`${cName}__text--p`}>
        Approach to meeting brief, materials
      </p>
    </React.Fragment>
  ),
}
