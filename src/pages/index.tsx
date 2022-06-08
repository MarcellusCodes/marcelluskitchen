import * as React from "react";
import "../styles/global.css";

import { NavBar, Header } from "../components/index";

// markup
const IndexPage = () => {
  return (
    <div className="dark:bg-primary bg-white transition-colors duration-300">
      <NavBar />
      <Header />
    </div>
  );
};

export default IndexPage;
