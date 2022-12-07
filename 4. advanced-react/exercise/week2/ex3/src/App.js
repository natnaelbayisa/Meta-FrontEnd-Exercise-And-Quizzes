import "./App.css";
import { useState } from "react";
import ReducerHook from "./components/ReducerHook";
import UseConsoleLog from "./components/UseConsoleLog";
import UseRefHook from "./components/UseRefHook";
import CustomHook from "./components/CustomHook";

function App() {
  const [count, setCount] = useState(0);
  UseConsoleLog(count);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <h1>Incrementing number</h1>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus 1</button>
      {/* <h1>Using useReducer hook</h1> */}
      <ReducerHook />
      <UseRefHook />
      <h1>Custom Hook</h1>
      <CustomHook />
    </div>
  );
}

export default App;
