import { merge } from "webpack-merge";
import { common, development, production } from "./configurations";
import { ARGS, ENV } from "./types";

const config = (_: ENV, args: ARGS) => {
  switch (args.defineProcessEnvNodeEnv) {
    case "development":
      return merge(common, development);
    case "production":
      return merge(common, production);
    default:
      throw new Error("No matching configuration was found!");
  }
};

export default config;
