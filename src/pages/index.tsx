import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { getImage } from "gatsby-plugin-image";
import {
  NavBar,
  Header,
  SectionIcon,
  Categories,
  MealOf,
  NewMealsAdded,
} from "../components/index";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  return (
    <div className="dark:bg-primary bg-white transition-colors duration-300">
      <Helmet
        htmlAttributes={{
          lang: "de",
        }}
      >
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Freestyle Kitchen Blog, mit neuesten rezepten aus alle Welt, von scharfem bis süßem essen ist alles dabei."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="canonical" href="https://marcelluskitchen.vercel.app/" />
        <title>Marcelluskitchen</title>
      </Helmet>
      <NavBar />
      <Header />
      <main>
        <Categories Categories={data.categories.edges} />
        <MealOf Meals={data.meals.edges} />
        <NewMealsAdded NewMeals={data.newMeals.edges} />
      </main>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query Landing {
    categories: allContentfulCategories(sort: { fields: order, order: ASC }) {
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
    meals: allContentfulMeal {
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
    newMeals: allContentfulMeal(
      sort: { fields: createdAt, order: DESC }
      limit: 10
    ) {
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
