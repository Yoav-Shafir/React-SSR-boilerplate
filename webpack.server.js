const path = require("path");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");

const baseConfig = require("./webpack.base");

const config = {
  // Inform webpack that we are building a bundle for node.js,
  // rather than for the browser.
  target: "node",

  // Tell webpack the root file of our
  // server application.
  entry: "./src/index.js",

  // Tell webpack where to put the output file
  // that is generated.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Tell webpack to not bundle any library to the server output bundle
  // if that library exists inside the `node_modules` folder
  externals: [[webpackNodeExternals()]]
};

module.exports = merge(baseConfig, config);