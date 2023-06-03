const path = require("path");

module.exports = {
  entry: "./src/api.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "roadmap-component.js",
    library: "roadmap-component",
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
