const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({ test: /\.mdx$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    return config;
  },
});
