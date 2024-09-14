export type Product = {
  image: ImageVariants;
  name: string;
  category: string;
  price: number;
};

type ImageVariants = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
