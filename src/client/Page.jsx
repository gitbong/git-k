import "@babel/polyfill";
import React, { useReducer } from "react";

import * as S from "./styles";

import { routesReducer, initialState } from "./reducers/routesReducer";
import { RoutesProvider } from "./contexts/routesContext";
import { Table } from "./components/Table";

const Page = () => {
  const [state, dispatch] = useReducer(routesReducer, initialState);

  return (
    <RoutesProvider value={{ state, dispatch }}>
      <S.Page>
        <S.Header>
          <S.Logo>
            <span>Git</span>
            <span>K</span>
          </S.Logo>
        </S.Header>
        <S.Main>
          <Table />
        </S.Main>
      </S.Page>
    </RoutesProvider>
  );
};

export default Page;
