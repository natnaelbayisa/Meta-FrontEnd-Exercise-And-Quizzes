import { useEffect, useState } from "react";

export default function ChangeTitle() {
  const [toggle, setToggle] = useState(false);

  function clickHandler() {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? "Welcome To Our Home" : "Using useEffect hook";
  }, [toggle]);

  return (
    <div>
      <h1>using the useEffect hook</h1>
      {toggle && <h2>Welcome To Our Home</h2>}
      <button onClick={clickHandler}>Toggle message</button>
    </div>
  );
}
