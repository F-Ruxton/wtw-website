import React from 'react';
import { cName } from '../../../Project';

export default {
  id:       'peatys',
  link: {
    text: 'Peatys',
    img: {
      request: {
        type: 'tag',
        name: 'peatys_link_img',
        tag: 'peatys_link_img',
      },
    },
  },
  project: {
    title:    'Peatys',
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
          Wharncliffe Trailworks has had the privilege of building a private jump line for legendary DH World Champion Steve Peat and his family.
        </p>
        <p className={`${cName}__text--p`}>
          The design brief specified the creation of two jump lines with the primary intention of providing a space for fun and progression for his sons Jake and George. The first line was required to be built at a comfortable level for the boys, with the second line to be more of a challenge and fun for all riders. Set in his private woods, the trail had to enhance the woodland aesthetics and provide an enjoyable space for hosting parties with the creation of a fire pit and seating area.
        </p>
        <p className={`${cName}__text--p`}>
          The majority of the build has been completed, but due to the winter conditions on site construction has been paused and final delivery is scheduled for spring 2019
        </p>
      </React.Fragment>
    ),
  }
}
