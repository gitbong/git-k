import {
  INITIALIZE_ROUTES,
  SEARCH_ROUTE,
  EXPEND_TABLE_ROW,
} from "../actions/routesAction";

export const initialState = {
  routes: [],
  searchKeyword: "",
  expendedRows: null,
};

export const routesReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_ROUTES: {
      return {
        ...state,
        routes: action.payload,
        expendedRows: !!state.expendedRows
          ? [...state.expendedRows]
          : action.payload.map(() => false),
      };
    }

    case SEARCH_ROUTE: {
      return { ...state, searchKeyword: action.payload };
    }

    case EXPEND_TABLE_ROW: {
      let index;
      state.routes.find((route, idx) => {
        index = idx;
        return route.id === action.payload;
      });

      const updatedExpendedRows = [...state.expendedRows];
      updatedExpendedRows[index] = !updatedExpendedRows[index];

      return { ...state, expendedRows: updatedExpendedRows };
    }

    default:
      return state;
  }
};
