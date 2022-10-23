import "./App.css";
import { useEffect, useState } from "react";
import { PanelMouseLogger, PointMouseLogger } from "./components/RenderProps";
const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);
  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant </header>
      <DessertsCount />
      <DrinksCount />
      <h1>Implementing scroller position with render props</h1>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
