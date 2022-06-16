import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <>
      <section className="relative container mx-auto px-4 overflow-hidden py-20">
        {children}
      </section>
    </>
  );
};

export default Section;
