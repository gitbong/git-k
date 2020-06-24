import React, { useContext } from "react";

const RoutesContext = React.createContext();

export const RoutesConsumer = RoutesContext.Consumer;
export const RoutesProvider = RoutesContext.Provider;

export function useRoutesContext() {
  return useContext(RoutesContext);
}
