module.exports = {
  launch: {
    args: [ '--no-sandbox', '--headless', '--disable-setuid-sandbox', '--disable-gpu'],
  },
  server: {
    command: `live-server ./node_modules/matcher-core/ --no-browser --quiet --port=8088`,
    protocol: 'http',
    usedPortAction: 'kill',
  },
};
