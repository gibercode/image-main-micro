const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    // path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    // publicPath: "http://localhost:3000/", // Develop
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  mode: "production",
  devServer: {
    hot: true,
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Aplica loaders de CSS
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", // Cambiar según el proyecto (searchBar, searchResults)
      remotes: {
        searchBar: "searchBar@http://localhost:3001/remoteEntry.js",
        list: "list@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true, // Asegúrate de que sea singleton
          eager: true, // Esto permite la carga eager
        },
        "react-dom": {
          singleton: true,
          eager: true, // Lo mismo para react-dom
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
