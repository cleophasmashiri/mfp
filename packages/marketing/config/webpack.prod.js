const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");

commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: { filename: "[name].[contenthash].js" },
  plugins: [
    new ModuleFederation({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./Marketing": "./src/bootstrap",
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
