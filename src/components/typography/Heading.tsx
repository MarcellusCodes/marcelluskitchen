import React from "react";
import { TypographyProps } from "../../constants/index";

const Heading: React.FC<TypographyProps> = ({ children, ClassNames }) => {
  return (
    <>
      <h1
        className={`text-5xl md:text-6xl font-primary dark:text-white text-black uppercase ${ClassNames}`}
      >
        {children}
      </h1>
    </>
  );
};

export default Heading;
