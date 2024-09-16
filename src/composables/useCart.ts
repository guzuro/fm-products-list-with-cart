import type { Cart, CartRecord } from "@/types/cart.types";
import type { Product } from "@/types/products.types";
import formatPrice from "@/utils/formatPrice";
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
    cart.value.splice(idx, 1);
  }

  function decrementFromCart(item: Product) {
    const itemIdx = cart.value.findIndex((i) => i.item.name === item.name);

    if (itemIdx !== -1) {
      if (cart.value[itemIdx].quantity === 1) {
        removeFromCart(itemIdx);
      } else {
        cart.value[itemIdx].quantity -= 1;
      }
    }
  }

  function calcRecordTotalPrice(record: CartRecord) {
    return formatPrice(record.item.price * record.quantity);
  }

  function cartProduct(record: Product) {
    return cart.value.find((r) => r.item.name === record.name);
  }

  function clearCart() {
    return (cart.value = []);
  }

  const cartTotalPrice = computed(() =>
    formatPrice(
      cart.value.reduce((total, record) => total + record.item.price * record.quantity, 0)
    )
  );

  const cartLength = computed(() => cart.value.length);

  return {
    addToCart,
    removeFromCart,
    calcRecordTotalPrice,
    cartProduct,
    decrementFromCart,
    clearCart,
    cartTotalPrice,
    cartLength,
    cart,
  };
}
