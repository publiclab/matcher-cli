// eslint-disable-next-line new-cap
const vorpal = new require('vorpal')();
const _commands = require('./src/matcher-commands.js');
const envVars = require('./.env_vars.json');

vorpal
    .delimiter('matcher-cli > ')
    .show();

if (envVars.ENV === 'PROD') {
  _commands = envVars.COMMAND_ENDPOINT;
}

const {commands} = _commands;

vorpal
    .command('matcher <query>', `
          !USAGE COMMANDS!

          update: Updates matcher environment.
          clear: Clears console, and exits.
          vsnap: Takes headless screenshot of the browser live-env.
          matches: Outputs pairs of matched key-points.
          corners: Outputs all eligible match points.
         `)
    .action(vorpalify);

// ALT: find a way to include travis env vars in here
// until then this seems to be a safe approach with
// no performance loss whatsoever
if (process.argv[2] === 'vsnap') {
  vorpalify({query: 'vsnap'});
}

async function vorpalify(args) {
  const {query} = args;
  // eslint-disable-next-line no-unused-vars
  summoner = await commands.summoner;
  if (eval(`commands.${query}`) !== undefined) {
    eval(`commands.${query}()`);
  } else if (eval(`summoner.${query}`)) {
    console.log(eval(`summoner.${query}`));
  } else {
    error(`Invalid command: "${query}", exiting...\n`);
    process.exit();
  }
}
