import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState({
    funny: "im funny",
    greet: "hello everybody",
    pc: "which one is ur pc?",
  });
  console.log(greeting, setGreeting);

  // same outputs in different function types

  // update pc names
  function pcNames() {
    setGreeting((prevState) => {
      return { ...prevState, pc: "del, hp, mac, or leno" };
    });
  }

  // update user status
  function updateStatus() {
    const status = { ...greeting };
    status.funny = "im not funny";
    setGreeting(status);
  }

  //  update greeting status
  function updateGreeting() {
    const newGreeting = { ...greeting };
    newGreeting.greet = "www means world wide web";
    // newGreeting.funny = "imn't funny";
    setGreeting(newGreeting);
    // setGreeting({ greet: "www means world wide web" });
  }

  return (
    <div className="App">
      <h1>{greeting.pc}</h1>
      <button onClick={pcNames}>Find ur pc name(s)</button>

      {""}

      <h1>{greeting.funny}</h1>
      <button onClick={updateStatus}>Update status</button>

      {""}

      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

export default App;
