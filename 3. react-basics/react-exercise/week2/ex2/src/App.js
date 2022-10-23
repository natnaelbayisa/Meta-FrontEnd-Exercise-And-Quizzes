import "./App.css";

import InputComponent from "./components/InputComponent";
import RegisterForm from "./components/RegisterForm";
import UseRefHook from "./components/UseRefHook";

function App() {
  return (
    <div>
      <UseRefHook />
      <RegisterForm />
      <InputComponent />
    </div>
  );
}

export default App;
