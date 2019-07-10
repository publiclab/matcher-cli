const utils = require('../jest-global-utils');
const {context} = utils.functions;

describe('Built-in modules', () => {
  beforeAll(async () => {
    await page.goto(`http://127.0.0.1:8088/demo/index.html`);
  });

  it('corners: all key-points detected', async () => {
    expect(context('corners')).not.toBeNull();
  });

  it('matches: all rich matches found', async () => {
    expect(context('matches')).not.toBeNull();
  });
});
