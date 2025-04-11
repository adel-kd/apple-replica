import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./component/css/bootstrap.css";
import "./component/css/styles.css";
import Header from "./component/header/header";
import Section1 from "./component/Section1/section1";
import Section2 from "./component/Section2/Section2";
import Section3 from "./component/Section3/Section3";
import Section4 from "./component/Section4/Section4";
import Section5 from "./component/Section5/Section5";
import Section6 from "./component/Section6/Section6";
import Footer from "./component/footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
