import React, { useState } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { ButtonTransition } from "../../constants/index";

interface LinkButtonProps {
  Title: string;
  Href: string;
  ClassName?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ Title, Href, ClassName }) => {
  const ArrowMotion = {
    initial: { x: 0 },
    hover: { x: 10 },
  };

  return (
    <>
      <Link to={Href}>
        <motion.div
          initial="initial"
          whileHover="hover"
          whileTap="hover"
          whileFocus="hover"
          className={`flex flex-row items-center space-x-6 group ${ClassName}`}
        >
          <span className="font-primary text-black dark:text-white text-3xl">
            {Title}
          </span>
          <motion.div className="h-12 w-12 duration-300 rounded-full border-2 border-gray-200 dark:border-gray-600 group-hover:border-black  dark:group-hover:border-white p-1 active:outline-none focus:outline-none inline-flex items-center justify-center overflow-hidden">
            <motion.svg
              transition={ButtonTransition}
              variants={ArrowMotion}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[28px] h-[28px] fill-current text-black dark:text-white"
            >
              <path d="M18 12a2 2 0 0 0-.59-1.4l-4.29-4.3a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L15 11H5a1 1 0 0 0 0 2h10l-3.29 3.29a1 1 0 0 0 1.41 1.42l4.29-4.3A2 2 0 0 0 18 12Z" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </Link>
    </>
  );
};

export default LinkButton;
