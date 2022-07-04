import React, { useState, useEffect } from "react";
import {
  Section,
  SectionIconContainer,
  Image,
  LinkButton,
  Title,
  ContentHeading,
  Badge,
  Text,
} from "./index";
import {
  MealOfFilterButtons,
  ButtonTransition,
  MealOfBgImages,
  EasingTransition,
} from "../constants/index";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import Choose from "../images/choose.png";

const MealOf: React.FC = ({ Meals }) => {
  const [Items, SetItems] = useState(Meals);
  const [Filter, SetFilter] = useState("");

  const ImageMotion = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    animate: {
      scale: 1.3,
      rotate: [-12, 12, 0],
      marginRight: "24px",
    },
  };

  return (
    <Section>
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        <div className="-ml-8">
          <SectionIconContainer>
            <StaticImage
              src="../images/mealof.png"
              alt="Branding"
              placeholder="blurred"
              layout="fixed"
              className="w-[64px!important] h-[64px!important]"
            />
          </SectionIconContainer>
        </div>
        <Title>Meal of ...</Title>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 flex-wrap lg:space-x-20 mt-16">
        {MealOfFilterButtons.map((Item) => (
          <motion.button
            onClick={() => {
              console.log(Items);
              SetFilter(Item.Filter);
              console.log(
                Items.filter((Item) => Item.node.mealOfThe === Filter)
              );
            }}
            initial="initial"
            animate={Item.Filter === Filter ? "animate" : "initial"}
            className="group flex flex-row items-center space-x-2 justify-center rounded-full bg-transparent border-2 lg:w-auto lg:h-auto w-[88px] h-[88px] border-gray-200 dark:border-gray-600 hover:border-black dark:hover:border-white duration-300  lg:py-4 lg:px-12 relative z-50 cursor-pointer lg:text-3xl"
          >
            <motion.div
              variants={ImageMotion}
              transition={ButtonTransition}
              className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]"
            >
              <img
                src={Item.Icon}
                alt="Filter Icon"
                placeholder="blurred"
                className="w-full h-full"
              />
            </motion.div>

            <motion.span className="text-black dark:text-white font-primary rounded-lg group-hover:text-white group-hover:bg-black duration-300 dark:group-hover:text-black dark:group-hover:bg-white hidden lg:block">
              {Item.Name}
            </motion.span>
          </motion.button>
        ))}
      </div>
      <div
        className={`mt-16 relative  ${Filter === "" ? "h-[500px]" : "h-full"}`}
      >
        {MealOfBgImages.map((Image) => (
          <img
            src={Image.Image}
            alt={Image.Alt}
            className={`absolute opacity-25 w-[64px] h-[64px] md:w-[128px] md:h-[128px] ${Image.X} ${Image.Y}`}
          />
        ))}
        <AnimatePresence exitBeforeEnter>
          {Filter === "" ? (
            <motion.div
              transition={{
                ...EasingTransition,
                duration: 1,
              }}
              initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                y: -50,
              }}
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                y: 0,
              }}
              viewport={{ once: true, margin: "0px 0px -300px 0px" }}
              className="w-[256px] h-[256px] mx-auto"
            >
              <motion.img />
              <StaticImage
                src="../images/choose.png"
                alt="Meal Of Choose Placeholder"
                placeholder="blurred"
                layout="fixed"
                className="w-full h-full"
              />
            </motion.div>
          ) : (
            ""
          )}
          {Items.filter((Item) => Item.node.mealOfThe === Filter).map(
            (FilteredItem) => (
              <motion.article
                key={FilteredItem.id}
                className="flex flex-col items-center relative space-y-10 max-w-[960px] mx-auto"
              >
                <motion.figure
                  transition={{
                    ...EasingTransition,
                    duration: 1,
                  }}
                  initial={{
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    y: -50,
                  }}
                  animate={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    y: 0,
                  }}
                  exit={{
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                    y: -50,
                  }}
                  className="z-10 max-w-[960px] h-[300px] w-full"
                >
                  <Image
                    Image={FilteredItem.node.image}
                    Alt="Branding"
                    Placeholder="blurred"
                    Layout="fixed"
                    Width="w-[100%!important] max-w-[960px]"
                    Height="h-[300px!important]"
                  />
                  <figcaption>{FilteredItem.node.caption}</figcaption>
                </motion.figure>
                <motion.div
                  transition={{
                    ...EasingTransition,
                    duration: 1,
                  }}
                  initial={{
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    y: 50,
                  }}
                  animate={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    y: 0,
                  }}
                  exit={{
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                    y: 50,
                  }}
                  className="self-start space-y-10 flex flex-col"
                >
                  <div className="flex flex-row items-center space-x-4">
                    <ContentHeading>{FilteredItem.node.name}</ContentHeading>
                    <Badge Title="Mittag" />
                  </div>
                  <Text>{FilteredItem.node.description}</Text>
                  <LinkButton
                    Title="Zur Mahlzeit"
                    Href={`/mahlzeiten/${FilteredItem.node.name}`}
                  />
                </motion.div>
              </motion.article>
            )
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default MealOf;
