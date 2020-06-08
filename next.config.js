// next.config.js
const withSass = require("@zeit/next-sass");
const withFonts = require('nextjs-fonts');
const withImages = require('next-images')

module.exports = withImages(withFonts(withSass({
  /* config options here */
  cssModules: true
})));
