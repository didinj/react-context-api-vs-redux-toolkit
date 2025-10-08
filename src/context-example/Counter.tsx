import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("Counter must be used within a CounterProvider");
  }

  const { state, dispatch } = context;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>React Context API Counter</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
