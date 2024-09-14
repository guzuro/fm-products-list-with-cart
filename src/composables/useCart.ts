import type { Cart, CartRecord } from "@/types/cart.types";
import type { Product } from "@/types/products.types";
import { computed, ref } from "vue";

const cart = ref<Cart>([]);

export default function useCart() {
  function createCartRecord(item: Product): CartRecord {
    return {
      quantity: 1,
      item,
    };
  }

  function addToCart(item: Product) {
    const cartItem = cart.value.find((i) => i.item.name === item.name);

    if (!cartItem) {
      cart.value.push(createCartRecord(item));
    } else {
      cartItem.quantity += 1;
    }
  }

  function removeFromCart(idx: number) {
    cart.value = cart.value.splice(idx, 1);
  }

  function calcRecordTotal(record: CartRecord) {
    return record.item.price * record.quantity;
  }

  const cartTotal = computed(() =>
    cart.value.reduce((total, record) => total + record.item.price * record.quantity, 0)
  );

  return {
    addToCart,
    removeFromCart,
    calcRecordTotal,
    cartTotal,
  };
}
