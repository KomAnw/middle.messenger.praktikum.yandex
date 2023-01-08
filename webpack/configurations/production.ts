import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const production: Configuration = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../../build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin()],
};

export default production;
