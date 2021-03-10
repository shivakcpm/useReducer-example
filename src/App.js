import "./styles.css";
import { useReducer } from "react";

export default function App() {
  function reducer(initialState, action) {
    switch (action.type) {
      case "increase":
        return initialState + 1;
      case "decrease":
        return initialState - 1;
      default:
        return initialState;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      {state}
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        Decrease
      </button>
    </div>
  );
}
