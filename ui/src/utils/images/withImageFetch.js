import React, { Component } from 'react';
import _ from 'lodash/fp';
import { fetchImage } from '.';

export const toTagImageRequest = tags => _.map(tag => ({ name: tag, type: 'tag', tag }), tags);

export default function withImageFetch(imageRequest = [], Compt) {
  return class ImageFetchComponent extends Component {
    constructor() {
      super();
      this.state = {
        images: {},
        _mount: false,
      };
    }

    async componentDidMount() {
      this._isMount = true;
      this.getImages();
    }

    componentWillUnmount() {
      this._isMount = false;
    }

    async getImages() {
      if (!_.isEmpty(imageRequest)) {
        imageRequest.forEach(async imgRequest => {
          const image = await fetchImage(imgRequest);

          this.setImage(imgRequest.name, image);
        });
      }
    }

    setImage(name, img) {
      if (_.isUndefined(img)) { return; }

      const { images: oldImages } = this.state;
      const images = _.merge(oldImages, { [name]: img });

      if (this._isMount) {
        this.setState({ images });
      }
    }

    render() {
      const { props, state } = this;

      return <Compt {...props} {...state} />;
    }
  }
}
