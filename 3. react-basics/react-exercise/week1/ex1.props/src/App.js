import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./App.css";

const myComponentStyle = {
  color: "blue",
  // lineHeight: 10,
  // padding: "1.5em",
  textAlign: "center",
};
// props used to pass data b.n components
function App(props) {
  return (
    <div>
      <div style={myComponentStyle}>
        <h1>{props.title} </h1>
      </div>
      <Header name="John" />;
      <Header name="Doe" />;
      <Header children="ABC" />;
      <Header children={<h3>DEF</h3>} />;
      <Header name="Alphabet">
        <p>GHI</p> {/* set as a children  */}
      </Header>
      <Main greet="Howdy" />
      <Header name={<Main />} />;
      <Sidebar greet="Hi" />
    </div>
  );
}

export default App;
