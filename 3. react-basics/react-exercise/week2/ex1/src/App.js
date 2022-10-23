import Promo from "./components/Promo";

import "./App.css";
import ModeToggler from "./components/ModeToggler";

// Parent component:
function Dog() {
  return <Puppy name="Max" bowlShape="square" bowlStatus="full" />;
}

// Child component:
function Puppy(props) {
  return (
    <div>
      {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
    </div>
  );
}

// Grandchild component:
function Bowl(props) {
  return (
    <span>
      {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
    </span>
  );
}

function Child(props) {
  return <h1>{props.message}</h1>;
}

function App() {
  const date = new Date();
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div>
      <Child message={date.toLocaleTimeString()} />
      <Dog />
      <Promo />
      <ModeToggler />
      <h1>Task: Add a button and handle a click event</h1>{" "}
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;
