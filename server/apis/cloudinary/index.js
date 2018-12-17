const actions = require('./actions');

module.exports = [
  {
    method: 'post',
    route: 'resources',
    action: actions.resources,
  },
  {
    method: 'post',
    route: 'resources/tags',
    action: actions.listTags,
  }
];
