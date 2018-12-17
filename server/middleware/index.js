const bodyParser = require('body-parser');
const cors       = require('cors');
const config     = require('../config');

const corsConfig = {
  origin: ['http://localhost:' + config.CONSTANTS.PORT],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

const middleware = [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cors(corsConfig),
];

module.exports = function(app) {
  middleware.forEach(w => app.use(w));
}
