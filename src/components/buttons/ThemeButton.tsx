import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UseDarkMode } from "../../hooks/index";
import { Button } from "../index";

const ThemeButtonMotion = {
  initial: {
    y: -35,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: 40,
  },
};

const ThemeButtonTransition = {
  ease: [0.5, 0, 0, 1],
  duration: 0.5,
};

const ThemeButton: React.FC = () => {
  const [ColorTheme, SetTheme] = UseDarkMode();

  return (
    <>
      <Button
        OnClick={() => {
          SetTheme(ColorTheme === "light" ? "light" : "dark");
        }}
      >
        <AnimatePresence initial={false} exitBeforeEnter>
          {ColorTheme === "light" ? (
            <motion.svg
              key="light"
              variants={ThemeButtonMotion}
              transition={ThemeButtonTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-[28px] h-[28px]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993"
                fill="currentColor"
                className="fill-current dark:text-white text-black"
              ></path>
            </motion.svg>
          ) : (
            <motion.svg
              key="dark"
              variants={ThemeButtonMotion}
              transition={ThemeButtonTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[28px] h-[28px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 21.42A5.426 5.426 0 0 1 10.581 16a5.425 5.425 0 0 1 5.42-5.42A5.425 5.425 0 0 1 21.418 16 5.426 5.426 0 0 1 16 21.42M16 8.64c-4.058 0-7.358 3.3-7.358 7.358s3.3 7.358 7.358 7.358c4.057 0 7.358-3.3 7.358-7.358S20.058 8.641 16 8.641M16 7.084a.97.97 0 0 0 .97-.97V3.345a.97.97 0 0 0-1.94 0v2.77c0 .534.434.97.97.97M6.116 15.03h-2.77a.97.97 0 0 0 0 1.939h2.77a.969.969 0 1 0 0-1.94M16 24.915a.97.97 0 0 0-.97.97v2.769a.97.97 0 0 0 1.94 0v-2.77a.97.97 0 0 0-.97-.97M28.654 15.03h-2.77a.97.97 0 0 0 0 1.939h2.77a.97.97 0 1 0 0-1.94M22.99 9.98a.97.97 0 0 0 .686-.284l1.028-1.028a.972.972 0 0 0 0-1.372.972.972 0 0 0-1.372 0l-1.028 1.029a.97.97 0 0 0 .686 1.655M8.325 9.696a.967.967 0 0 0 1.371 0 .969.969 0 0 0 0-1.371L8.668 7.297a.97.97 0 0 0-1.37 1.37l1.027 1.029ZM8.325 22.304l-1.028 1.027a.969.969 0 1 0 1.371 1.371l1.028-1.027a.969.969 0 1 0-1.37-1.37M23.675 22.304a.97.97 0 1 0-1.37 1.371l1.027 1.027a.964.964 0 0 0 1.371 0 .969.969 0 0 0 0-1.37l-1.028-1.028Z"
                fill="currentColor"
                className="fill-current dark:text-white text-black"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </Button>
    </>
  );
};

export default ThemeButton;
