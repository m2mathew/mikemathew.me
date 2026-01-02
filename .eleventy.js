import shortcodes from './config/shortcodes.js'
import plugins from './config/plugins.js'

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
