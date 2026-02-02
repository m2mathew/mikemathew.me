import collections from './config/collections.js';
import filters from './config/filters/filters.js';
import dateFilters from './config/filters/date.js';
import indiewebFilters from './config/filters/indieweb.js';
import plugins from './config/plugins.js';
import shortcodes from './config/shortcodes.js';

// Markdown
import markdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItFigCaptions from 'markdown-it-image-figures';
import markdownItGithubAlerts from 'markdown-it-github-alerts';

export default (async function (eleventyConfig) {
  // Toggle the filter below to use this to debug nunjucks data:
  //  {{ currentUrl | log }}
  // eleventyConfig.addFilter('log', value => {
  //   console.log(':: log :: ', value)
  // });

  // markdown setup
  const markdownItOptions = {
    breaks: true, // Convert '\n' in paragraphs into <br>
    html: true, // Enable HTML tags in source
    linkify: true // Auto-convert URL-like text to links
  };

  // Use plugins
  const markdownConfig = markdownIt(markdownItOptions)
    .use(markdownItFootnote)
    .use(markdownItGithubAlerts)
    .use(markdownItFigCaptions, { figcaption: true });

  eleventyConfig.setLibrary('md', markdownConfig);

  // passthrough
  ['src/assets'].forEach(path => {
    eleventyConfig.addPassthroughCopy(path)
  });

  // plugins
  plugins.forEach(plugin => {
    eleventyConfig.addPlugin(plugin.name, { ...plugin.options })
  });

  // shortcodes
  Object.keys(shortcodes).forEach(shortcodeName => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  });

  // collections
  Object.keys(collections).forEach(collectionName => {
      eleventyConfig.addCollection(collectionName, collections[collectionName])
  });

  // filters
  Object.keys(filters).forEach(filterName => {
      eleventyConfig.addFilter(filterName, filters[filterName])
  });

  // date filters
  Object.keys(dateFilters).forEach(filterName => {
      eleventyConfig.addFilter(filterName, dateFilters[filterName])
  });

  // indieweb/posse filters
  Object.keys(indiewebFilters).forEach(filterName => {
      eleventyConfig.addFilter(filterName, indiewebFilters[filterName])
  })

  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes',
      layouts: '_layouts',
    },
  }
})
