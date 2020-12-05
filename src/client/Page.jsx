import "@babel/polyfill";
import React, { useReducer } from "react";
import { SearchInput, Table } from "./components";
import { RoutesProvider } from "./contexts/routesContext";
import { initialState, routesReducer } from "./reducers/routesReducer";
import * as S from "./styles";

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
          <SearchInput />
        </S.Header>
        <S.Main>
          <Table />
        </S.Main>
      </S.Page>
    </RoutesProvider>
  );
};

export default Page;
