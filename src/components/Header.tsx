import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LinkButton } from "./index";
import { motion } from "framer-motion";
import { HeaderTransition } from "../constants/index";

const HeaderTextMotion = {
  initial: { y: -25, clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)" },
  animate: { y: 0, clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" },
};

const HeaderImageMotion = {
  initial: { x: -25, clipPath: "polygon(0 100%, 0 100%, 0 0, 0 0)" },
  animate: { x: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" },
};

const Header: React.FC = () => {
  return (
    <>
      <header className="container mx-auto flex flex-col py-10 md:py-20 px-4 overflow-x-hidden">
        <div className="container-grid w-full h-full">
          <div className="Freestyle">
            <motion.h1
              transition={HeaderTransition}
              initial="initial"
              animate="animate"
              variants={HeaderTextMotion}
              className="text-5xl md:text-6xl font-primary dark:text-white text-black uppercase"
            >
              Freestyle
            </motion.h1>
          </div>
          <motion.div
            transition={{ ...HeaderTransition, delay: 0.4 }}
            initial="initial"
            animate="animate"
            variants={HeaderImageMotion}
            className="FreestyleImage"
          >
            <StaticImage
              src="../images/header-1.jpg"
              alt="Branding"
              placeholder="blurred"
              layout="fixed"
              className="w-[100%!important] h-[50px!important] sm:h-[150px!important] dark:shadow-none shadow-lg shadow-primary rounded-lg"
            />
          </motion.div>
          <motion.div
            transition={{ ...HeaderTransition, delay: 0.5 }}
            initial="initial"
            animate="animate"
            variants={HeaderImageMotion}
            className="KitchenImage"
          >
            <StaticImage
              src="../images/header-2.jpg"
              alt="Branding"
              placeholder="blurred"
              layout="fixed"
              className="w-[100%!important] h-[50px!important] sm:h-[150px!important] dark:shadow-none shadow-lg shadow-primary rounded-lg"
            />
          </motion.div>
          <div className="Kitchen">
            <motion.h1
              transition={{ ...HeaderTransition, delay: 0.1 }}
              initial="initial"
              animate="animate"
              variants={HeaderTextMotion}
              className="text-5xl md:text-6xl font-primary dark:text-white text-black uppercase"
            >
              Kitchen
            </motion.h1>
          </div>
          <motion.div
            transition={{ ...HeaderTransition, delay: 0.5 }}
            initial="initial"
            animate="animate"
            variants={HeaderImageMotion}
            className="KitchenImage2"
          >
            <StaticImage
              src="../images/header-3.jpg"
              alt="Branding"
              placeholder="blurred"
              layout="fixed"
              className="w-[100%!important] h-[50px!important] sm:h-[150px!important] dark:shadow-none shadow-lg shadow-primary rounded-lg"
            />
          </motion.div>
          <motion.div
            transition={{ ...HeaderTransition, delay: 0.4 }}
            initial="initial"
            animate="animate"
            variants={HeaderImageMotion}
            className="BlogImage"
          >
            <StaticImage
              src="../images/header-4.jpg"
              alt="Branding"
              placeholder="blurred"
              layout="fixed"
              className="w-[100%!important] h-[50px!important] sm:h-[150px!important] dark:shadow-none shadow-lg shadow-primary rounded-lg"
            />
          </motion.div>
          <div className="Blog">
            <motion.h1
              transition={{ ...HeaderTransition, delay: 0.2 }}
              initial="initial"
              animate="animate"
              variants={HeaderTextMotion}
              className="text-5xl md:text-6xl font-primary dark:text-white text-black uppercase"
            >
              Blog
            </motion.h1>
          </div>
        </div>
        <motion.div
          transition={{ ...HeaderTransition, delay: 0.6 }}
          initial="initial"
          animate="animate"
          variants={HeaderTextMotion}
        >
          <LinkButton Title="Get a meal" Href="/" ClassName="mt-10" />
        </motion.div>
      </header>
    </>
  );
};

export default Header;
