import { UserProvider, useUser } from "./Components/UserContext";
import "./App.css";

const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span className="usename">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  // const { user } = useUser();
  return (
    <div>
      <h2>Welcome to Lorem</h2>
      <p>Lorem jjsdhjshjd skjfjdskfnvklsjdnx lknsdfnklsa kasfkja</p>
      {/* <p>Written by {user.name}</p> */}
    </div>
  );
};

function Root() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Test() {
  return (
    <div>
      <UserProvider>
        <Root />
      </UserProvider>
    </div>
  );
}

export default Test;
