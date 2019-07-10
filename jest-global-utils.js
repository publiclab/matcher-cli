const context = async (module) => {
  try {
    await page.$eval('#res', async (e) => {
      if (e.innerText) {
        return eval(`JSON.parse(e.innerText).${module}`);
      }
    });
  } catch (e) {
    // await page.screenshot({
    //   path: `jest_matcher-${module}`,
    //   fullPage: true,
    //   type: 'png',
    // });
    console.warn(e.message);
  }
};

module.exports = {
  functions: {
    context: context,
  },
};

//  node_modules/matcher-core/index.html `browser` must be false for cli tests
