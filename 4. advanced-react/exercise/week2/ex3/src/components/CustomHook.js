import { useState, useEffect, useRef } from "react";

export default function CustomHook() {
  const [day, setDay] = useState(
    new Date().toLocaleString("default", { weekday: "long" })
  );
  const PrevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day} <br />
        {PrevDay && <span>Previous work day was: {PrevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}

function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}
