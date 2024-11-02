const path = require("path");

module.exports = {
  mode: "production",
  entry: "@/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle_client.js",
    // publicPath: "/web-site-frontend/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        type: "javascript/auto",
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192, // Converte imagens menores que 8kb para base64 diretamente no bundle.js
              name: "images/[name].[hash:8].[ext]", // Salva as imagens no diretório "images" com um hash no nome do arquivo
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

    extensions: [".ts", ".tsx", ".js", ".css"],
  },
};
