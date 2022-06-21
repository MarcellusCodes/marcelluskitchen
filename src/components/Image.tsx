import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

interface ImageProps {
  Image: undefined;
  Alt: string;
  Placeholder: string;
  Layout: string;
  Width: string;
  Height: string;
  Styles: string;
  
}

const Image: React.FC<ImageProps> = ({
  Image,
  Alt,
  Placeholder,
  Layout,
  Width,
  Height,
  Styles,
}) => {
  const FormatImage = getImage(Image);
  return (
    <>
      <GatsbyImage
        image={FormatImage}
        alt={Alt}
        placeholder={Placeholder}
        layout={Layout}
        className={`${Width} ${Height} ${Styles} rounded-lg`}
      />
    </>
  );
};

export default Image;
