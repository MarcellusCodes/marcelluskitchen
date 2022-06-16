import React from "react";

interface TitleProps {
  ClassNames: string;
  children: React.ReactNode | string;
}

const Title: React.FC<TitleProps> = ({ children, ClassNames }) => {
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
