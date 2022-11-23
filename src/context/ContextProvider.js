import Auth from "./Auth";
import React, { useEffect, useState } from "react";

const ContextProvider = (props) => {
  const userData = {
    name: "Khan",
    age: 21,
  };

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "Hassan Khan",
        age: 26,
      });
    }, 5000);
    console.log("test");
  }, []);

  const theme = {
    dark: "#212121",
    light: "#eee",
    bluelight: "#00457E",
    purple: "#806491",
  };

  const [user, setUser] = useState(userData);

  return (
    <Auth.Provider value={{ user, theme }}>{props.children}</Auth.Provider>
  );
};
export default ContextProvider;
