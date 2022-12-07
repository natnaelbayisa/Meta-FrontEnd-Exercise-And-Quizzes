import "./App.css";
import { RadioGroup, RadioOption } from "./components/RadioGroup";
import { useState } from "react";
import ComponentComposition from "./components/ComponentComposition";
import LoginSignup from "./components/LoginSignup";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>

      <ComponentComposition />
      <LoginSignup />
    </div>
  );
}

export default App;
