import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "someone",
    email: "1@sth.io",
    dob: "1/2/2022",
  });
  return <UserContext.Provider value={{ user }}></UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
