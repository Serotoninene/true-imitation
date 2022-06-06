import React, { createContext, useReducer, useContext } from "react";

//Define Conext
export const GlobalStateContext = createContext({
  cursorType: false,
  cursorStyles: ["pointer", "hovered", "locked", "white"],
});
export const GlobalDispatchContext = createContext();

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//Provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked", "white"],
  });

  return (
    <GlobalDispatchContext.Provider value={{ dispatch: dispatch }}>
      <GlobalStateContext.Provider value={state}>
        {props.children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
