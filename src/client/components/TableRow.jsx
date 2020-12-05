import React from "react";
import styled from "styled-components";
import { expendTableRow } from "../actions/routesAction";
import { useRoutesContext } from "../contexts/routesContext";
import * as S from "../styles";

const TD = styled.td`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TableRow = ({
  routeId,
  name,
  method,
  path,
  handlers,
  currentHandlerId,
  delay,
  onChangeHandler,
  onChangeDelay,
}) => {
  const {
    state: { routes, expendedRows },
    dispatch,
  } = useRoutesContext();

  let index;
  routes.find((route, idx) => {
    index = idx;
    return route.id === routeId;
  });

  const isExpended = expendedRows[index];

  const onClickOnSelect = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <tr
        style={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(expendTableRow(routeId));
        }}
      >
        <TD>
          <S.ExpendIcon>{isExpended ? "- " : "+ "}</S.ExpendIcon>
          <span style={{ textTransform: "capitalize" }}>{name}</span>
        </TD>
        <td>{method}</td>
        <td>{path}</td>
        <TD>{handlers.find((item) => item.id === currentHandlerId).name}</TD>
        <td>
          <select
            onClick={onClickOnSelect}
            onChange={(event) => {
              event.stopPropagation();
              onChangeDelay(event.target.value);
            }}
            style={{ border: "none" }}
            value={delay}
          >
            <option value="0">0 s</option>
            <option value="2">2 s</option>
            <option value="5" checked>
              5 s
            </option>
            <option value="10">10 s</option>
          </select>
        </td>
      </tr>
      {isExpended && (
        <tr>
          <td
            colSpan="5"
            style={{ paddingLeft: "30px", paddingBottom: "30px" }}
          >
            <span>Responses : </span>
            {handlers.map((handler, i) => (
              <S.ResponseButton
                active={handler.id === currentHandlerId}
                key={`handler-${i}`}
                onClick={() => {
                  onChangeHandler(handler.id);
                }}
              >
                {handler.name}
              </S.ResponseButton>
            ))}
          </td>
        </tr>
      )}
    </>
  );
};
