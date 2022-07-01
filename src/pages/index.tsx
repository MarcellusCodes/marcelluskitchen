import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { getImage } from "gatsby-plugin-image";
import {
  NavBar,
  Header,
  SectionIcon,
  Categories,
  MealOf,
} from "../components/index";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <div className="dark:bg-primary bg-white transition-colors duration-300">
      <NavBar />
      <Header />
      <main>
        <Categories Categories={data.allContentfulCategories.edges} />
        <MealOf
          Icon={data.allContentfulIcons.edges[0].node.image}
          Meals={data.allContentfulMeal.edges}
        />
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
    allContentfulIcons {
      edges {
        node {
          id
          image {
            gatsbyImageData(height: 64, width: 64, placeholder: BLURRED)
          }
        }
      }
    }
    allContentfulMeal {
      edges {
        node {
          categorie
          id
          description
          image {
            gatsbyImageData(placeholder: BLURRED, width: 960, height: 720)
          }
          mealOfThe
          name
          caption
        }
      }
    }
  }
`;
