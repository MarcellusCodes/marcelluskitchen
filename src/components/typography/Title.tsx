import React from "react";
import { TypographyProps } from "../../constants/index";

const Title: React.FC<TypographyProps> = ({ children, ClassNames }) => {
  return (
    <>
      <h2
        className={`font-primary text-5xl md:text-6xl text-black dark:text-white whitespace-nowrap ${ClassNames}`}
      >
        {children}
      </h2>
    </>
  );
};

export default Title;
