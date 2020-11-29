import React, { useReducer, useState } from "react";

const App = () => {
  const initialState = { name: "Tanaka", count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { name: state.name, count: state.count + 1 };
      case "decrement":
        return { name: state.name, count: state.count - 1 };
      case "changename":
        console.log(action.payload);
        return { name: action.payload, count: state.count };
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        type="text"
        value={state.name}
        onChange={e =>
          dispatch({ type: "changename", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>increment</button>
      <button onClick={() => dispatch({ type: "rest" })}>reset</button>
      <br />
      Name:{state.name} <br />
      Count:{state.count}
    </>
  );
};

export default App;
