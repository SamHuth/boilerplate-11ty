const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
  // Eleventy PassThrough
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy({ 'robots.txt': 'robots.txt' });
  eleventyConfig.addPassthroughCopy({ 'humans.txt': 'humans.txt' });
  eleventyConfig.addPassthroughCopy({ 'sitemap.xml': 'sitemap.xml' });

  // Current Year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Create Breadcrumbs
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

  // Add MarkdownIt with attributes code
  const mdOptions = {
    html: true,
    linkify: true,
    typographer: true
  };

  const markdownLib = markdownIt(mdOptions).use(markdownItAttrs).disable('code');
  eleventyConfig.setLibrary('md', markdownLib);

  // Format dates for 
  eleventyConfig.addFilter('formatDate', function (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  })

};