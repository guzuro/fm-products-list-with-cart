<template>
  <div class="cart__items">
    <CartItem
      v-for="(record, index) in cart"
      :key="index"
      :record="record"
      :readonly="readonly"
      @remove-from-cart="removeFromCart(index)"
    />

    <div class="cart-items__total-container">
      <span> Order Total </span>
      <span class="cart-items__total-price">
        {{ cartTotalPrice }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCart from "@/composables/useCart";
import CartItem from "./CartItem.vue";

const { cart, cartTotalPrice, removeFromCart } = useCart();

const { readonly } = defineProps<{
  readonly: boolean;
}>();
</script>

<style scoped>
.cart__items {
  margin-top: 35px;
}

.cart-items__total-container {
  margin-top: 20px;

  display: flex;
  align-content: center;
  justify-content: space-between;
}

.cart-items__total-price {
  font-size: 16px;
  color: var(--rose-900);
  font-weight: 700;
}
</style>
