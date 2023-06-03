const path = require("path");

module.exports = {
  entry: "./src/api.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-roadmap-component.js",
    library: "MyRoadmapComponent",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
