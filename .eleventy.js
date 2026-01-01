import shortcodes from './config/shortcodes.js'

export default (async function (eleventyConfig) {
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
