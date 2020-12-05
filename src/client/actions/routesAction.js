export const INITIALIZE_ROUTES = "INITIALIZE_ROUTES";
export const SEARCH_ROUTE = "SEARCH_ROUTE";
export const EXPEND_TABLE_ROW = "EXPEND_TABLE_ROW";

export const initializeRoutesAction = (payload) => ({
  type: INITIALIZE_ROUTES,
  payload,
});

export const searchRouteAction = (keyword) => ({
  type: SEARCH_ROUTE,
  payload: keyword,
});

export const expendTableRow = (routeId) => ({
  type: EXPEND_TABLE_ROW,
  payload: routeId,
});
