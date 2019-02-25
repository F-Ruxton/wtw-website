import _ from 'lodash/fp';
import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import CloudinaryConfig from '../../config/cloudinary';
import axios from 'axios';
import apiConstants from '../../redux/apis/cloudinary/contants';

export const url = (publicId, options) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new(CloudinaryConfig);
  return cl.url(publicId, scOptions);
};

export const resources = async ({ method = apiConstants.get, options = {} } = {}) => {
  try {
    const resources = await axios.post(
      '/api/resources',
      { method, options },
      { 'Content-Type': 'application/json' },
    );
    return resources;
  } catch (error) {
    console.log('Error: ' + error);
    return {};
  }
}

export const fetchImageByTag = async ({ tag, multiple = false, options = {} }) => {
  const mainImg = await resources({
    method: apiConstants.get_by_tag,
    options: { type: 'upload', tag, tags: true, ...options, secure: true },
  });
  const resourcesRaw = _.get(['data', 'resources'], mainImg);

  return multiple
    ? resourcesRaw
    : _.head(resourcesRaw);
}

export const fetchImage = (imgRequest = {}) => {
  if (_.isEmpty(imgRequest)) { return {}; }

  switch (imgRequest.type) {
    case 'tag': return fetchImageByTag(imgRequest);
    default: return {};
  }
};

export const findByTag =
  _.curry((imgs, tag) => {
    try {
      return _.find(img => _.includes(tag, _.get('tags', img)), imgs);
    }
    catch (error) {
      console.log('error fe')
      console.log(error)
    }
  });
