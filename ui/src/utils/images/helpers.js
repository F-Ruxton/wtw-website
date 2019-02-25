import _ from 'lodash/fp';

export const secureResourceUrls = resources => _.map(
  resource => ({ ...resource, url: _.get('secure_url', resource) }),
  resources
);
