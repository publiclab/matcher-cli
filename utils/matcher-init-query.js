const envVars = require('../.env_vars');

const liveServer = require("../node_modules/live-server/live-server");

exports.matcherInitQuery = `${liveServer} ${envVars.MATCHER_PATH} --no-browser --quiet --port=${envVars.PORT} &`;
