<template>
  <div class="cart">
    <h2>Your Cart ({{ cartLength }})</h2>

    <div
      v-if="cartLength < 1"
      class="cart__empty"
    >
      <IconEmptyCart />

      <span> Your added items will appear here </span>
    </div>
    <div
      v-else
      class="cart__items"
    >
      <CartItem
        v-for="(record, index) in cart"
        :key="index"
        :record="record"
        @remove-from-cart="removeFromCart(index)"
      />

      <div class="cart__total-container">
        <span> Order Total </span>
        <span class="cart__total-price">
          {{ cartTotalPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCart from "@/composables/useCart";
import IconEmptyCart from "./icons/IconEmptyCart.vue";
import CartItem from "./CartItem.vue";

const { cartLength, cart, cartTotalPrice, removeFromCart } = useCart();
</script>

<style scoped>
.cart {
  background-color: white;
  border-radius: 10px;
  padding: 25px 30px;

  h2 {
    color: var(--red);
  }
}

.cart :deep(.cart-item) {
  padding: 20px 0;
  border-bottom: 1px var(--rose-100) solid;
}

.cart :deep(.cart-item):first-child {
  padding-top: 0;
}

.cart__empty {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;

  svg {
    margin-top: 60px;
  }

  span {
    margin-top: 35px;
    font-weight: 700;
  }
}

.cart__items {
  margin-top: 35px;
}

.cart__total-container {
  margin-top: 20px;

  display: flex;
  align-content: center;
  justify-content: space-between;
}

.cart__total {
}

.cart__total-price {
  font-size: 16px;
  color: var(--rose-900);
  font-weight: 700;
}
</style>
