import React from "react";
import { TypographyProps } from "../../constants/index";

const ContentHeading: React.FC<TypographyProps> = ({
  children,
  ClassNames,
}) => {
  return (
    <>
      <h3
        className={`font-primary text-4xl md:text-5xl text-black dark:text-white whitespace-nowrap ${ClassNames}`}
      >
        {children}
      </h3>
    </>
  );
};

export default ContentHeading;
