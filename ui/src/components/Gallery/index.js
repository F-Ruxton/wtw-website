import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import * as ReactGallery from 'react-grid-gallery';
import Loading from '../Loading';
import './styles.css';

export const GALLERY = 'GALLERY';

const cName = 'Gallery';

const thumbnailHeight = 300;

const toGalleryImage = ({ url, width, height }) => ({
  src: url,
  thumbnail: url,
  thumbnailHeight,
  thumbnailWidth: (width * thumbnailHeight) / height,
});

const toGalleryImages = images => _.flow(
  _.filter('url'),
  _.map(toGalleryImage),
)(images);

const Gallery = ({ images: rawImages = [], className }) => {
  const images = toGalleryImages(rawImages);

  return (
    <div className={classNames(cName, className)}>
      {
        _.isEmpty(images)
          ? <Loading />
          : (
            <React.Fragment>
              <ReactGallery
                images={images}
                enableImageSelection={false}
              />
              <div className={`${cName}__buffer`} />
            </React.Fragment>
          )
      }
    </div>
  );
}

export default Gallery;
