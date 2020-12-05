import React, { useEffect } from "react";
import axios from "axios";

import * as S from "../styles";
import { TableRow } from "./TableRow";
import { useRoutesContext } from "../contexts/routesContext";
import { initializeRoutesAction } from "../actions/routesAction";
export const Table = () => {
  const {
    state: { routes, searchKeyword },
    dispatch,
  } = useRoutesContext();

  const getRoutes = async () => {
    const rsp = await axios.get("/gitk/routes");
    dispatch(initializeRoutesAction(rsp.data));
  };

  const updateRoute = async (routeId, data) => {
    await axios.patch(`/gitk/routes/${routeId}`, data);
    getRoutes();
  };

  useEffect(() => {
    getRoutes();
  }, []);

  const routesArr = Object.keys(routes).map((routeId) => routes[routeId]);
  const filteredRoutes =
    searchKeyword.trim() === ""
      ? routesArr
      : routesArr.filter((route) => route.name.includes(searchKeyword.trim()));

  if (filteredRoutes.length === 0) return <div>No route found :(</div>;
  return (
    <S.Table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>API</th>
          <th>Method</th>
          <th>Path</th>
          <th>Current response</th>
          <th>Response delay</th>
        </tr>
      </thead>
      <tbody>
        {routes &&
          filteredRoutes.map((route, i) => (
            <TableRow
              key={`route-${i}`}
              routeId={route.id}
              name={route.name}
              method={route.method}
              path={route.path}
              handlers={route.handlers}
              currentHandlerId={route.currentHandlerId}
              delay={route.delay}
              onChangeHandler={(currentHandlerId) => {
                updateRoute(i, { currentHandlerId });
              }}
              onChangeDelay={(delay) => {
                updateRoute(i, { delay });
              }}
            />
          ))}
      </tbody>
    </S.Table>
  );
};
