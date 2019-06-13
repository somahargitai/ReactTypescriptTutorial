import React, { useReducer } from "react";

type Props = {};
export const CounterUseReducer: React.FC<Props> = (props: Props) => {
  const reducer = (state: any, action: any) => {
    switch (action) {
      case "ADD": return state + 1;
      case "SUB": return state - 1;
      case "RES": return (state = 0);
      default: return state;
    }
  };

  // useReducer(reducer hook, default value)
  const [count, dispatch] = useReducer(reducer, 0);

  return (<>
      <div>{count}</div>
      <button onClick={() => dispatch("ADD")}>+</button>
      <button onClick={() => dispatch("SUB")}>-</button>
      <button onClick={() => dispatch("RES")}>reset</button>
  </>); // <> </> is a <Fragment>
};
