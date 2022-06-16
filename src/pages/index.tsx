import * as React from "react";
import "../styles/global.css";
import { getImage } from "gatsby-plugin-image";
import { NavBar, Header, SectionIcon, Categories } from "../components/index";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div className="dark:bg-primary bg-white transition-colors duration-300">
      <NavBar />
      <Header />
      <main>
        <Categories Categories={data.allContentfulCategories.edges} />
      </main>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query Landing {
    allContentfulCategories(sort: { fields: order, order: ASC }) {
      edges {
        node {
          id
          title
          icon {
            gatsbyImageData(height: 64, placeholder: BLURRED, width: 64)
          }
          images {
            gatsbyImageData(height: 720, placeholder: BLURRED, width: 960)
          }
          information
          link
        }
      }
    }
  }
`;
