export const ts_js = {
  test: /\.(ts|js)?$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
    },
  },
};
