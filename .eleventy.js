export default (function (eleventyConfig) {
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
