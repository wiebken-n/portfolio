module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addWatchTarget("./src/style.css");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
