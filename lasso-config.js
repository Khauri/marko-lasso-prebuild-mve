const isProduction = process.env.NODE_ENV === 'production';
const usePrebuild = !!process.env.USE_PREBUILD;

module.exports = {
  plugins: [
      'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
  ],
  loadPrebuild: usePrebuild,
  outputDir: __dirname + '/static', // Place all generated JS/CSS/etc. files into the "static" dir
  bundlingEnabled: isProduction, // Only enable bundling in production
  minify: isProduction, // Only minify JS and CSS code in production
  fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
};
