import * as React from "react";
import "../styles/global.css";
import { getImage } from "gatsby-plugin-image";
import { NavBar, Header, SectionIcon } from "../components/index";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div className="dark:bg-primary bg-white transition-colors duration-300">
      <NavBar />
      <Header />
      <SectionIcon Image={data.contentfulCategories.icon} />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query Landing {
    contentfulCategories {
      id
      information
      title
      link
      icon {
        gatsbyImageData(
          formats: AUTO
          height: 64
          placeholder: BLURRED
          width: 64
        )
      }
    }
  }
`;
