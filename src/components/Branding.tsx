import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Branding = () => {
  return (
    <Link to="/">
      <div className="flex flex-row items-center">
        <StaticImage
          src="../images/branding.png"
          alt="Branding"
          placeholder="blurred"
          layout="fixed"
          width={64}
          height={64}
        />
        <h2 className="font-primary text-2xl leading-6 dark:text-white transition-colors duration-300 text-black">
          Marcellus <br /> Kitchen
        </h2>
      </div>
    </Link>
  );
};

export default Branding;
