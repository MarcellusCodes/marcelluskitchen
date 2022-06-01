import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  OnClick?: () => void;
  ClassNames: string;
}

const Button: React.FC<ButtonProps> = ({ OnClick, ClassNames, children }) => {
  return (
    <motion.button
      onClick={OnClick}
      initial="initial"
      whileHover="hover"
      exit="initial"
      className={`${ClassNames} h-12 w-12 duration-300 rounded-full border-2 border-gray-200 dark:border-gray-600 hover:border-black  dark:hover:border-white p-1 active:outline-none focus:outline-none inline-flex items-center justify-center overflow-hidden`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
