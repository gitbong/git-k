import express from "express";

import { ROUTE_TABLE } from "../constants";
import { addRoute, getHandler } from "./routes";
import delay from "../utils/delay";
import db from "../data/db";

const customized = express.Router();
export const createCustomizedRoute = (config) => {
  const routeId = addRoute(config);

  const { path, method } = config;

  customized[method.toLowerCase()](path, async (req, res) => {
    const { delay: delayTime } = db().getData(ROUTE_TABLE, routeId);

    const { handler, status = 200 } = getHandler(routeId);

    if (delayTime > 0) await delay(delayTime * 1000);
    res.status(status);
    res.send(handler(res, req));
  });
};

export const getCustomizedRoutes = () => customized;
