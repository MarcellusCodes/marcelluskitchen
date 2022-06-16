import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Section, SectionIcon, Image, LinkButton } from "./index";
import { motion } from "framer-motion";
import { EasingTransition } from "../constants/index";

interface CategoriesProps {
  Categories: {
    node: {
      id: string;
      information: string;
      title: string;
      link: string;
      icon: {
        gatsbyImageData: {
          images: {
            sources: [];
            fallback: {
              src: string;
              srcSet: string;
              sizes: string;
            };
          };
          layout: string;
          width: number;
          height: number;
          placeholder: {
            fallback: string;
          };
        };
      };
    };
  }[];
}

const Categories: React.FC<CategoriesProps> = ({ Categories }) => {
  return (
    <>
      <Section>
        <div className="flex flex-col item-start space-y-16 md:space-y-60">
          {Categories.map((Categories, Index) => (
            <article
              className={`flex flex-col ${Index % 2 === 0 ? "" : "self-end"}`}
            >
              <div
                className={`flex flex-col md:flex-row md:items-start  ${
                  Index % 2 === 0 ? "" : "md:flex-row-reverse items-end"
                } `}
              >
                <div
                  className={`md:space-y-24 relative ${
                    Index % 2 === 0 ? "self-start" : "self-end"
                  }`}
                >
                  <motion.div
                    className={` ${
                      Index % 2 === 0 ? "-ml-28" : "-mr-8"
                    }  md:m-0`}
                  >
                    <SectionIcon Image={Categories.node.icon} />
                  </motion.div>

                  <h2
                    className={`font-primary text-5xl text-black dark:text-white whitespace-nowrap mb-10 md:mb-0 ${
                      Index % 2 === 0
                        ? "md:-rotate-[90deg] text-left"
                        : "md:rotate-[90deg] md:self-center text-right"
                    }`}
                  >
                    {Categories.node.title}
                  </h2>
                </div>
                <div className={`flex flex-col space-y-10`}>
                  <motion.div
                    transition={{
                      ...EasingTransition,
                      duration: 1,
                    }}
                    viewport={{ once: true, margin: "-300px" }}
                    initial={{
                      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                      y: -50,
                    }}
                    whileInView={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                      y: 0,
                    }}
                  >
                    <Image
                      Image={Categories.node.images}
                      Alt="Branding"
                      Placeholder="blurred"
                      Layout="fixed"
                      Width="w-[100%!important]"
                      Height=" h-[300px!important]"
                      Styles={`${Index % 2 === 0 ? "" : "self-end"}`}
                    />
                  </motion.div>

                  <p
                    className={`font-secondary dark:text-tertiary text-gray-600 text-xl max-w-[1050px] ${
                      Index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {Categories.node.information}
                  </p>
                  <LinkButton
                    Title="Mehr Erfahren"
                    Href={Categories.node.link}
                    ClassName={`${Index % 2 === 0 ? "" : "justify-end"}`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Categories;
