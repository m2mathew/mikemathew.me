import collections from './config/collections.js';
import filters from './config/filters/filters.js';
import dateFilters from './config/filters/date.js';
import plugins from './config/plugins.js';
import shortcodes from './config/shortcodes.js';

import slugify from 'slugify';

export default (async function (eleventyConfig) {
  // Toggle the filter below to use this to debug nunjucks data:
  //  {{ currentUrl | log }}
  // eleventyConfig.addFilter('log', value => {
  //   console.log(':: log :: ', value)
  // });

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
