module.exports = function (eleventyConfig) {
  // eleventyConfig.addTransform("postcss", require("./lib/transforms/postcss"));
  // eleventyConfig.addWatchTarget("./src/css/");

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy({
    "_src/assets/fonts": "./fonts",
    "_src/assets/img": "./img",
    "_src/assets/js": "./js",
  });
  // eleventyConfig.addPassthroughCopy("_src/assets/fonts");
  // eleventyConfig.addPassthroughCopy("_src/assets/img");
  // eleventyConfig.addPassthroughCopy("_src/assets/css");
  // eleventyConfig.addPassthroughCopy("_src/assets/js");
  // eleventyConfig.addPassthroughCopy("_src/assets/js/*.map");
  // eleventyConfig.addPassthroughCopy("_src/assets/css/*.map");

  // eleventyConfig.setTemplateFormats([
  //   // Templates:
  //   "html",
  //   "njk",
  //   "md",
  //   // Static Assets:
  //   "css",
  //   "jpeg",
  //   "jpg",
  //   "png",
  //   "svg",
  //   "woff",
  //   "woff2",
  // ]);

  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    files: ["_site/assets/js/**/*.js", "_site/assets/css/**/*.css"],
    // ghostMode: false,
    port: 3000,
  });

  eleventyConfig.addWatchTarget("./_src/assets/js/**/*.js");
  eleventyConfig.addWatchTarget("./_src/assets/js/**/*.js");

  return {
    dir: {
      input: "_src/pages",
      output: "_site",
      includes: "../_includes",
    },
    templateFormats: ["html", "md", "njk", "11ty.js"],
    passthroughFileCopy: true,
  };
};
