import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Buy ingridients") return { money: state.money - 90 };
  if (action.type === "Sell a meal") return { money: state.money + 20 };
  if (action.type === "Celebrity visit") return { money: state.money + 10000 };
  return state;
};

export default function ReducerHook() {
  const initialState = { money: 100 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "Buy ingridients" })}>
          Buy ingridients
        </button>
        <button onClick={() => dispatch({ type: "Sell a meal" })}>
          Serve a meal to the customer
        </button>
        <button onClick={() => dispatch({ type: "Celebrity visit" })}>
          Celebrity visit
        </button>
      </div>
    </div>
  );
}
