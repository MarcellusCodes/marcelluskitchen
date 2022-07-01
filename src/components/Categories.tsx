import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Section, SectionIcon, Image, LinkButton, Title, Text } from "./index";
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
                      Index % 2 === 0 ? "-ml-8" : "-mr-8"
                    }  md:m-0`}
                  >
                    <SectionIcon Image={Categories.node.icon} />
                  </motion.div>
                  <Title
                    ClassNames={`mb-10 md:mb-0 ${
                      Index % 2 === 0
                        ? "md:-rotate-[90deg] text-left"
                        : "md:rotate-[90deg] md:self-center text-right"
                    }`}
                  >
                    {Categories.node.title}
                  </Title>
                </div>
                <div className={`flex flex-col space-y-10`}>
                  <motion.div
                    className={`${Index % 2 === 0 ? "self-start" : "self-end"}`}
                    transition={{
                      ...EasingTransition,
                      duration: 1,
                    }}
                    viewport={{ once: true, margin: "0px 0px -300px 0px" }}
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
                      Width="w-[100%!important] max-w-[960px]"
                      Height="h-[300px!important]"
                    />
                  </motion.div>
                  <Text
                    ClassNames={`max-w-[1050px] ${
                      Index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {Categories.node.information}
                  </Text>
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
