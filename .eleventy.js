const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
  // Eleventy PassThrough
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy({ 'robots.txt': 'robots.txt' });

  // Current Year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add target=blank custom code
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(mdOptions).use(markdownItAttrs).disable('code');
  eleventyConfig.setLibrary('md', markdownLib);

};