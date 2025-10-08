import React from "react";
import { CounterProvider } from "./context-example/CounterContext";
import Counter from "./context-example/Counter";

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
