import * as React from "react";
import "../styles/global.css";
import { getImage } from "gatsby-plugin-image";
import { NavBar, Header, SectionIcon, Categories } from "../components/index";
import { graphql } from "gatsby";

const MyMeals = () => {
  return (
    <div className="dark:bg-primary bg-white transition-colors duration-300">
      <NavBar />
      <Header />
      <main>
        <h1>Meine Mahlzeiten</h1>
      </main>
    </div>
  );
};

export default MyMeals;
