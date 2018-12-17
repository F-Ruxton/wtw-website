const actions = require('./actions');

module.exports = [
  {
    method: 'post',
    route: 'api/resources',
    action: actions.resources,
  },
  {
    method: 'post',
    route: 'api/resources/tags',
    action: actions.listTags,
  }
];
