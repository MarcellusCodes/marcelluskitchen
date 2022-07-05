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
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const NewMealsAdded: React.FC = ({ NewMeals }) => {
  return (
    <Section>
      <div className="flex flex-col-reverse sm:flex-row items-end justify-end sm:items-center">
        <Title>Neu hinzugefügt</Title>
        <div className="-mr-8 sm:mr-0">
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
      </div>
      <div className="w-full h-auto md:h-[500px] flex flex-col-reverse md:space-y-0 items-center md:flex-row justify-between">
        <div className="w-full md:w-[70%] h-full flex flex-row justify-between">
          <Swiper className="w-full md:h-full relative justify-self-start h-[500px] p-2 z-[40!important]">
            {NewMeals.map((Meal) => (
              <SwiperSlide className="w-full h-full rounded-lg relative flex justify-center items-center group">
                <motion.div className="w-full h-full absolute inset-0 rounded-lg dark:bg-white bg-black group-hover:scale-100 scale-75 duration-300 ease-easing-transition"></motion.div>
                <Image
                  Image={Meal.node.image}
                  Alt="New Meal Image"
                  Placeholder="blurred"
                  Layout="fixed"
                  Width="w-[98%!important]"
                  Height="h-[96%!important]"
                  Styles="group-hover:bg-blend-darken"
                />
                <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-black bg-white bg-opacity-50 dark:bg-opacity-50 z-[50] w-[98%!important] h-[96%!important] rounded-lg scale-0 group-hover:scale-100 duration-300 ease-easing-transition flex items-center justify-center">
                  <motion.div
                    transition={{
                      ...EasingTransition,
                      duration: 1,
                    }}
                    initial={{
                      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                      y: 50,
                    }}
                    whileInView={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                      y: 0,
                    }}
                    exit={{
                      clipPath:
                        "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                      y: 50,
                    }}
                    className="space-y-10 flex flex-col h-full items-center justify-center p-2"
                  >
                    <div className="flex flex-row items-center space-x-4 space-y-4 flex-wrap">
                      <ContentHeading>{Meal.node.name}</ContentHeading>
                      {Meal.node.categorie.map((Categorie) => (
                        <Badge Title={Categorie} />
                      ))}
                    </div>
                    <Text>{Meal.node.description}</Text>
                    <LinkButton
                      Title="Zur Mahlzeit"
                      Href={`/mahlzeiten/${Meal.node.name}`}
                    />
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:w-[30%] h-full justify-center flex items-center mt-16 mb-10 md:mt-0 md:mb-0">
          <StaticImage
            src="../images/new_meals_added.png"
            alt="Branding"
            placeholder="blurred"
            layout="fixed"
            className="w-[128px!important] h-[128px!important] md:w-[256px!important] md:h-[256px!important]"
          />
        </div>
      </div>
    </Section>
  );
};

export default NewMealsAdded;
