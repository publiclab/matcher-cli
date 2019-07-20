const {commands} = require('./src/matcher-commands.js');

module.exports = async function getSummons() {
  const res = await commands.summoner;
  return {matched_points: res.matches, points: res.corners};
};
