import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `marcelluskitchen`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "z-5vTWPVOE_nzG2TvC2H9aWiwt2vHFXXI-H34CURTWE",
        spaceId: "8ae5xhoiw45y",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark",
        classNameLight: "light",
        storageKey: "darkMode",
        element: "document.documentElement",
        minify: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oregano`, `Vollkorn`],
        display: "swap",
      },
    },
  ],
};

export default config;
