import * as React from "react";
import "../styles/global.css";

import { NavBar } from "../components/index";

// markup
const IndexPage = () => {
  return (
    <div className="dark:bg-primary bg-white h-screen transition-colors duration-300">
      <NavBar />
    </div>
  );
};

export default IndexPage;
