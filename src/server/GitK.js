import "@babel/polyfill";
import path from "path";
import express from "express";
import bodyParser from "body-Parser";
import appRoute from "./router/app";

import {
  createCustomizedRoute,
  getCustomizedRoutes,
} from "./router/customized";

export const GitK = class MockServer {
  constructor() {
    this.app = new express();

    const staticPath = "../client";
    this.app.use(express.static(path.join(__dirname, staticPath)));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  route(config) {
    createCustomizedRoute(config);
    return this;
  }
  start(port = 8080) {
    this.app.use("/gitk", appRoute);
    this.app.use("/", getCustomizedRoutes());

    this.app.listen(port, () => {
      console.log("GitK mock server is running on http://localhost:" + port);
    });
  }
};
export default GitK;
