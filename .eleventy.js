import collections from './config/collections.js'
import dateFilters from './config/filters/date.js'
import plugins from './config/plugins.js'
import shortcodes from './config/shortcodes.js'

export default (async function (eleventyConfig) {
  // passthrough
  ['src/assets'].forEach(path => {
    eleventyConfig.addPassthroughCopy(path)
  })

  // plugins
  plugins.forEach(plugin => {
    eleventyConfig.addPlugin(plugin.name, { ...plugin.options })
  })

  // shortcodes
  Object.keys(shortcodes).forEach(shortcodeName => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  })

  // collections
  Object.keys(collections).forEach(collectionName => {
      eleventyConfig.addCollection(collectionName, collections[collectionName])
  })

  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true })

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
