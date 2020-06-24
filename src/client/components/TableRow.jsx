import React, { useState } from "react";
import * as S from "../styles";
export const TableRow = ({
  name,
  method,
  path,
  handlers,
  currentHandlerId,
  delay,
  onChangeHandler,
  onChangeDelay,
}) => {
  const [isExpended, setIsExpended] = useState(false);

  const onClickOnSelect = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <tr
        onClick={() => {
          setIsExpended(!isExpended);
        }}
      >
        <td>
          <S.ExpendIcon>{isExpended ? "- " : "+ "}</S.ExpendIcon>
          {name}
        </td>
        <td>{method}</td>
        <td>{path}</td>
        <td>{handlers.find((item) => item.id === currentHandlerId).name}</td>
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
            style={{ paddingLeft: "30px", paddingBottom: "10px" }}
          >
            <h4 style={{ margin: "-5px 0 0 0" }}>
              {`└ How would you like the response?`}{" "}
            </h4>
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
