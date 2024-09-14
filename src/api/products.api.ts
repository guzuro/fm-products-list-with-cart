import type { Product } from "@/types/products.types";
import products from "../includes/data.json";

export function reqProducts(): Promise<Array<Product>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}
