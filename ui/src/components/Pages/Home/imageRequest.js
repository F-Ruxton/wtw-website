import { toTagImageRequest } from '../../../utils/images/withImageFetch';

export const landingImageTags = {
  landing_main      : 'landing_main',
  landing_about     : 'landing_about',
  landing_portfolio : 'landing_portfolio',
  landing_contact   : 'landing_contact',
};

const imageRequest = toTagImageRequest([
  landingImageTags.landing_main,
  landingImageTags.landing_about,
  landingImageTags.landing_portfolio,
  landingImageTags.landing_contact,
]);

export default imageRequest;
