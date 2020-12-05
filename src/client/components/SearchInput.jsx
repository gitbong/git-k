import React from "react";
import styled from "styled-components";
import { searchRouteAction } from "../actions/routesAction";
import { useRoutesContext } from "../contexts/routesContext";

const Label = styled.label`
  font-size: small;
`;

const Input = styled.input`
  font-size: small;
  border: 1px solid #ccc;
  border-radius: 100px;
  padding: 0.2rem 0.5rem;
  color: #222;
`;

export const SearchInput = () => {
  const { dispatch } = useRoutesContext();

  return (
    <div>
      <Label htmlFor="search-input">Search: </Label>
      <Input
        id="search-input"
        onChange={(e) => {
          dispatch(searchRouteAction(e.target.value));
        }}
      />
    </div>
  );
};
