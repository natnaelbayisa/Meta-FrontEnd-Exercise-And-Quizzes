import "./App.css";
import Pizza from "./assets/images/pizza.jpg";
import HomePage from "./Components/HomePage";
import AboutLittleLemon from "./Components/AboutLittelLemon";
import Contact from "./Components/Contact";
import { Routes, Route, Link } from "react-router-dom";
import CurrentMessage from "./Components/CurrentMessage";
import SingleView from "./Components/SingleView";
// import ReactPlayer from "react-player";
import ReactPlayer from "react-player/youtube";

function App() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  // const MyReactPlayer = () => {
  const vidUrl = "https://www.youtube.com/watch?v=xxkzrg3lkZ0";
  //   return <ReactPlayer playing={false} volume={0.5} url={vidUrl} controls={true} />;
  // };

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }
  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }

  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About-Little-Lemon
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/current-message" className="nav-item">
          Message
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/current-message" element={<CurrentMessage />}></Route>
      </Routes>
      <img height={200} src={Pizza} alt=""></img> {/*height is given here */}
      <img
        // height={200}  //height and margin is given in App.css
        src={require("./assets/images/pizza.jpg")}
        alt=""
      ></img>
      <SingleView />
      <h1>ReactPlayer example</h1>
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} controls={true} />
      {/* <MyReactPlayer /> */}
      <h1>Song selection</h1>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default App;
