import React from "react";
import { useReducer } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import MealsList from "./components/MealsList";
import PropDrilling from "./components/PropDrilling";
import MealsProvider from "./Providers/MealsProvider";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";

const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 50 };
  return new Error();
};

function Hook() {
  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
    { fruitName: "plum", id: 4 },
  ]);

  const [word, setWord] = React.useState("Eat");
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick() {
    setWord("Drink");
  }

  return (
    <div>
      <Heading message={word + " at a little lemon"} />
      <button onClick={handleClick}>Click here</button>

      <h1>PropDrilling - flow data from parent to child to grand child</h1>
      <PropDrilling />

      <h1>Using Context API</h1>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>

      <h1>Using useReducer Hook </h1>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "ride" })}>
          A new customer
        </button>
        <button onClick={() => dispatch({ type: "fuel" })}>
          Refill the tank
        </button>
      </div>
      <h1>state Management </h1>
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default Hook;
