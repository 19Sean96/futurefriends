// next.config.js
const withSass = require("@zeit/next-sass");
const withFonts = require('nextjs-fonts');

module.exports = withFonts(withSass({
  /* config options here */
  cssModules: true
}));
