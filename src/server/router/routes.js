import { GET, ROUTE_TABLE, HANDLER_TABLE } from "../constants";
import db from "../data/db";

const generateHandlersData = (handlers) => {
  return handlers.map((handler) => {
    const newHandler = db().addData(HANDLER_TABLE, handler);
    return {
      id: newHandler.id,
      name: newHandler.name,
    };
  });
};

const generateRouteData = (config) => {
  const { name, method = GET, path, handlers } = config;
  const handlersData = generateHandlersData(handlers);

  return {
    name,
    method,
    path,
    currentHandlerId: handlersData[0].id,
    handlers: handlersData,
    delay: "0",
  };
};

export const addRoute = (config) =>
  db().addData(ROUTE_TABLE, generateRouteData(config)).id;

export const getHandler = (routeId) => {
  const currentHandlerId = db().getData(ROUTE_TABLE, routeId).currentHandlerId;
  const handler = db().getData(HANDLER_TABLE, currentHandlerId).handler;
  return handler ? handler : () => "GitK: No handler found";
};
