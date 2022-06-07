import React, { useState, createContext, useMemo } from "react";

export const CursorContext = createContext();

export function CursorProvider(props) {
  const [cursorType, setCursorType] = useState("pointer");
  const changeCursorType = (e) => setCursorType(e);
  const contextValue = useMemo(() => {
    return { cursorType, changeCursorType };
  }, [cursorType]);

  // fuck i don't geeet it , how am  supposed to memoize those values ?

  return (
    <CursorContext.Provider value={contextValue}>
      {props.children}
    </CursorContext.Provider>
  );
}
