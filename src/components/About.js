import { useContext } from "react";
import Auth from "../context/Auth";

const About = () => {
  const data = useContext(Auth);
  console.log(data);
  return (
    <>
      <h2>About {data.user.name} and age is {data.user.age}</h2>
      <button style={{ background: data.theme.dark, color: data.theme.light }}>Button</button>
    </>
  );
};

export default About;
