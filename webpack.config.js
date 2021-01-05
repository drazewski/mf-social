const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve('.', 'src', 'index.js')]
  },
  mode: "development",
  resolve: {
    alias: {
      src: path.resolve('.', 'src')
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    host: '0.0.0.0',
    port: 3002,
    historyApiFallback: true
  },
  output: {
    publicPath: "http://localhost:3002/",
    chunkFilename: "[id].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfSocial",
      library: { type: "var", name: "mfSocial" },
      filename: "remoteEntry.js",
      exposes: {
        "./SocialService": "./src/SocialService",
      },
      remotes: {
        hostApp: "hostApp"
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "@material-ui/core": {
            singleton: true,
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
