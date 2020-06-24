import { INITIALIZE_ROUTES } from "../actions/routesAction";

export const initialState = { routes: [] };

export const routesReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_ROUTES: {
      return { routes: action.payload };
    }

    default:
      return state;
  }
};
