import { loader } from "mini-css-extract-plugin";

const styleLoader =
  process.env.NODE_ENV === "development" ? "style-loader" : loader;

export const css = {
  test: /\.(css)$/,
  use: [styleLoader, "css-loader"],
};

export const scss = {
  test: /\.(s(a|c)ss)$/,
  use: [styleLoader, "css-loader", "sass-loader"],
};
