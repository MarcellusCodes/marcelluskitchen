import React, { useState } from "react";
import { Button } from "../index";
import { motion } from "framer-motion";
import { ButtonTransition } from "../../constants/index";

const MenuButton: React.FC = () => {
  const [Open, SetOpen] = useState(false);

  const MenuButtonMotion = {
    initial: { width: "18px" },
    animate: { scaleX: Open ? 0.5 : 1 },
  };

  return (
    <Button
      OnClick={() => {
        SetOpen((prev) => !prev);
      }}
      ClassNames="flex flex-col space-y-1"
      AriaLabel="Menü"
    >
      <motion.div
        transition={ButtonTransition}
        variants={MenuButtonMotion}
        initial="initial"
        animate="animate"
        className="h-[2px] dark:bg-white bg-black"
        style={{ transformOrigin: "right" }}
      ></motion.div>
      <motion.div
        transition={ButtonTransition}
        variants={MenuButtonMotion}
        initial="initial"
        animate="animate"
        className="h-[2px] dark:bg-white bg-black"
      ></motion.div>
      <motion.div
        transition={ButtonTransition}
        variants={MenuButtonMotion}
        initial="initial"
        animate="animate"
        className="h-[2px] dark:bg-white bg-black"
        style={{ transformOrigin: "left" }}
      ></motion.div>
    </Button>
  );
};

export default MenuButton;
