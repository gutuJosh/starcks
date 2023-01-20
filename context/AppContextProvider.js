import React, { useReducer, createContext } from "react";

export const AppContext = createContext();


const initialState = {
  players: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return {
        players: action.payload,
      };
    
    default:
      throw new Error();
  }
}

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
