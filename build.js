const path = require('path');

const lasso = require('lasso');
const lassoConfig = require('./lasso-config.js');

const builder = lasso.create(lassoConfig);

(async () => {
  const relPath = './src/pages/index.marko';
  const pagePath = path.resolve(__dirname, relPath);
  const pageConfigs = {
    dependencies: [`marko-hydrate:${relPath}`],
    pageDir: path.dirname(pagePath),
    flags: [],
    pageName: relPath,
  };
  await builder.prebuildPage(pageConfigs);
})();