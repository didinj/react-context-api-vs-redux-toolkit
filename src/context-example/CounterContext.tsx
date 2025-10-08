import React, {
  createContext,
  useReducer,
  type ReactNode,
  type Dispatch
} from "react";

type State = {
  count: number;
};

type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };

const initialState: State = { count: 0 };

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

type CounterContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
