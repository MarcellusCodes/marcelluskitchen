import React from "react";
import { TypographyProps } from "../../constants/index";

const Text: React.FC<TypographyProps> = ({ children, ClassNames }) => {
  return (
    <>
      <p
        className={`font-secondary dark:text-tertiary text-gray-600 text-2xl ${ClassNames}`}
      >
        {children}
      </p>
    </>
  );
};

export default Text;
