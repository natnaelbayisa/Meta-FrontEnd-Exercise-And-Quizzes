import "./App.css";
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "13:00",
    },
    {
      id: "todo2",
      createdAt: "15:00",
    },
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div className="App">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>

      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
