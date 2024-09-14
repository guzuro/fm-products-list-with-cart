import type { Product } from "./products.types";

export type Cart = Array<CartRecord>;

export type CartRecord = {
  item: Product;
  quantity: number;
};
