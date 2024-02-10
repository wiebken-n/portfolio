module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/normalize.css");
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/script.js");
  eleventyConfig.addWatchTarget("./src/style.css");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
