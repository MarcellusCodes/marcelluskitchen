import React, { useState, useEffect } from "react";
import {
  Section,
  SectionIcon,
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
} from "../constants/index";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const MealOf: React.FC = ({ Icon, Meals }) => {
  const [Items, SetItems] = useState(Meals);
  const [Filter, SetFilter] = useState("day");
  const [FilterdItems, SetFilteredItems] = useState(Meals);

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
  useEffect(() => {
    SetFilteredItems(Items.filter((Item) => Item.mealOfThe === Filter));
  }, [Filter]);

  return (
    <Section>
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        <div className="-ml-8">
          <SectionIcon Image={Icon} />
        </div>
        <Title>Meal of ...</Title>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 flex-wrap lg:space-x-20 mt-16">
        {MealOfFilterButtons.map((Item) => (
          <motion.button
            onClick={() => {
              SetFilter(Item.Filter);
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
      <div className="mt-16 relative h-[500px]">
        {MealOfBgImages.map((Image) => (
          <img
            src={Image.Image}
            alt={Image.Alt}
            className={`absolute opacity-25 w-[128px] h-[128px] ${Image.X} ${Image.Y}`}
          />
        ))}
        {FilterdItems &&
          FilterdItems.map((Item) => (
            <article
              key={Item.id}
              className="flex flex-col items-center relative space-y-10 max-w-[960px] mx-auto"
            >
              <figure className="z-10 max-w-[960px] h-[300px] w-full">
                <figcaption>{Item.node.caption}</figcaption>
              </figure>
              <div className="self-start space-y-10 flex flex-col">
                <div className="flex flex-row items-center space-x-4">
                  <ContentHeading>{Item.node.name}</ContentHeading>
                  <Badge Title="Mittag" />
                </div>
                <Text>{Item.node.description}</Text>
                <LinkButton
                  Title="Zur Mahlzeit"
                  Href={`/mahlzeiten/${Item.node.name}`}
                />
              </div>
            </article>
          ))}
      </div>
    </Section>
  );
};

export default MealOf;
