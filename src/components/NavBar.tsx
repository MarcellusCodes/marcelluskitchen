import React from "react";
import { Branding, ThemeButton, MenuButton } from "./index";
import { NavItems } from "../constants/index";
import { motion, LayoutGroup } from "framer-motion";
import { Link } from "gatsby";
import { UseDarkMode } from "../hooks/index";

const NavBar = () => {
  const [ColorTheme, SetTheme] = UseDarkMode();

  const NavItemMotion = {
    rest: {
      color: ColorTheme === "dark" ? "#000" : "#a9adc1",
      pathLength: 0,
      opacity: 0,
    },
    hover: {
      color: ColorTheme === "dark" ? "#000" : "#FFFFFF",
      pathLength: 1,
      opacity: 1,
    },
  };

  const NavItemTransition = {
    ease: [0.5, 0, 0, 1],
    duration: 0.5,
  };

  return (
    <nav className="py-4 px-4">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Branding />
        <motion.ul className="hidden md:flex flex-row items-center space-x-8">
          {NavItems.map((Item) => (
            <motion.li
              key={Item.Id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="text-[1.3rem] font-primary relative cursor-pointer text-gray-600 dark:text-tertiary hover:text-black dark:hover:text-white duration-500 transition-colors"
            >
              <a>
                <Link to={Item.Href}>{Item.Name}</Link>
              </a>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 400"
                className="w-[90px] h-[90px] absolute -top-[1.9rem] -left-3"
              >
                <motion.path
                  variants={NavItemMotion}
                  transition={NavItemTransition}
                  d="M60.934 29.84c1.963 25.333-35.789 283.745 24.038 310.2 59.827 26.455 650.673 12.614 708.537 13.736"
                  fill="none"
                  strokeWidth={31.907000000000004}
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeDasharray="39.56468 47.22236"
                  className="stroke-current text-black dark:text-white"
                />
              </motion.svg>
            </motion.li>
          ))}
        </motion.ul>
        <div className="flex flex-row items-center space-x-4">
          <ThemeButton />
          <MenuButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
