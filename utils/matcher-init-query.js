const envVars = require('../.env_vars');

// localize live-server
exports.matcherInitQuery = `live-server ${envVars.MATCHER_PATH} --no-browser --quiet --port=${envVars.PORT} &`;
