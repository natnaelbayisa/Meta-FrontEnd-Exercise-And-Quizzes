import React, { useState } from "react";

import "./App.css";

function App() {
  const [num, setNum] = useState("");
  const [output, setOutput] = useState(0);

  function Clear() {
    setOutput(0);
  }

  function Subtraction() {
    setOutput(Number(output) - Number(num));
  }

  function Addition() {
    setOutput(Number(output) + Number(num));
  }

  function Multiplication() {
    setOutput(Number(output) * Number(num));
  }

  function Division() {
    setOutput(Number(output) / Number(num));
  }

  function valueOnChange(e) {
    setNum(e.target.value);
  }

  return (
    <main>
      <h2>Calculator By React</h2>
      <div>
        <div id="Result">{output}</div>
      </div>
      <input
        type="Number"
        placeholder="Enter number"
        onChange={valueOnChange}
        value={num}
      />
      <div>
        <button onClick={Addition}>Add</button>
        <button onClick={Subtraction}>Subtract</button>
        <button onClick={Multiplication}>Multipli</button>
        <button onClick={Division}>Divide</button>
        <button onClick={Clear}>Clear</button>
      </div>
    </main>
  );
}

export default App;
