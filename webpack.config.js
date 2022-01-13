const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
  },
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      short_name: "Petgram",
      description:
        "Con Petgram puedes encontrar las mejores mascotas domesticas",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "petgram-server-ricrdomedina-olwianwtx-ricrdomedina.vercel.app"
          ),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "./src/assets/[name].[ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties",
            ],
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
