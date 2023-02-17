import React, { useState, useTransition } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [number, setNumber] = useState(0);

  function inc() {
    setNumber((prev) => prev + 1);
  }

  function dec() {
    setNumber((prev) => prev - 1);
  }
  return (
    <div>
      <h1 data-testid="currentNumber">{number}</h1>
      <button data-testid="addOne" onClick={inc}>
        Add one
      </button>
      <button data-testid="subOne" onClick={dec}>
        decrease by one
      </button>

      <Form />
    </div>
  );
}

export default App;
