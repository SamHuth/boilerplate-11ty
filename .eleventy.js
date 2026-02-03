const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
  // Eleventy PassThrough
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy({ 'robots.txt': 'robots.txt' });

  // Current Year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addShortcode("breadcrumbs", (path) => {
    const pages = path.split('/').filter(val => val);
    let cumulativePath = '';

    const breadcrumbItems = pages.map((page, index) => {
      cumulativePath += `/${page}`;
      const position = index + 2; // Start at 2 since home is position 1
      return `<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" href="${cumulativePath}/">
            <span itemprop="name">${page}</span>
          </a>
          <meta itemprop="position" content="${position}" />
        </li>`;
    }).join('\n        ');

    return `
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" href="/">
            <span itemprop="name">home</span>
          </a>
          <meta itemprop="position" content="1" />
        </li>
        ${breadcrumbItems}
      </ol>
    `;
  });

  // Add target=blank custom code
  const mdOptions = {
    html: true,
    linkify: true,
    typographer: true
  };

  const markdownLib = markdownIt(mdOptions).use(markdownItAttrs).disable('code');
  eleventyConfig.setLibrary('md', markdownLib);

};