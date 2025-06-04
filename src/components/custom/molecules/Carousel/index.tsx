"use client";

import Image from "next/image";

interface CarouselProps {
  src: string;
  altText: string;
  customClass: string;
}

// ToDo: Update this component to include Carousel later.
const Carousel = (props: CarouselProps) => {
  const { src, altText, customClass } = props;

  return (
    <Image
      src={src}
      alt={altText}
      width={1200}
      height={600}
      className={customClass}
    />
  );
};

export default Carousel;
