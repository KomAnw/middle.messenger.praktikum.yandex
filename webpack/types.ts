import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export type ENV = {
  WEBPACK_SERVE: boolean;
};

export type ARGS = {
  config: string[];
  env: ENV;
  defineProcessEnvNodeEnv?: "development" | "production";
};
