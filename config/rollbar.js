// include and initialize the rollbar library with access token
const Rollbar = require("rollbar");
const { rollbarAccessToken } = require('./keys');
var rollbar = new Rollbar(rollbarAccessToken);

module.exports = rollbar;