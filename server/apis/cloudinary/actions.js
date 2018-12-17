const _          = require('lodash/fp');
const cloudinary = require('cloudinary');
const config     = require('../../config');
const constants  = require('./contants');

cloudinary.config(config.CLOUDINARY);

const api = cloudinary.v2.api;

const _resources = (options, cb) => api.resources(options, cb);

const _resources_by_tag = (options, cb) => {
  const tag = _.get('tag', options);

  return !_.isEmpty(tag)
    ? api.resources_by_tag(tag, options, cb)
    : cb(undefined, { result: 'no tag sent' });
}

const _resources_by_ids = (options, cb) => {
  const public_ids = _.get('public_ids', options);

  return _.isEmpty(public_ids)
    ? cb(undefined, { result: 'no public ids sent' })
    : api.resources_by_ids(public_ids, options, cb);
};

const _resources_by_context = (options, cb) => api.resources_by_context(options, cb);

const _resources_by_moderation = (options, cb) => api.resources_by_moderation(options, cb);

const resourceOptionsDefaults = {
  type  : 'image',
};

const getSetup = (req, res) => ({
  method     : _.get(['body', 'method'], req),
  options    : _.defaultsDeep(resourceOptionsDefaults, _.get('body.options', req)),
  send       : (error, result) => {
    if (error) {
      console.log(error);
      throw error;
    }

    return res.json(result);
  }
});

function resources (req, res) {
  const { method, options, send } = getSetup(req, res);

  switch (method) {
    case constants.get              : _resources              (options, send); break;
    case constants.get_by_tag       : _resources_by_tag       (options, send); break;
    case constants.get_by_ids       : _resources_by_ids       (options, send); break;
    case constants.get_by_context   : _resources_by_context   (options, send); break;
    case constants.get_by_moderation: _resources_by_moderation(options, send); break;
    default: send(undefined, "Unknown method");
  }
};

function listTags(req, res) {
  const { options, send } = getSetup(req, res);

  return cloudinary.api.tags(options, send);
}

module.exports = {
  resources: resources,
  listTags: listTags,
};
