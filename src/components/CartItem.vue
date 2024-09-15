<template>
  <div class="cart-item">
    <div class="cart-item__body">
      <span class="cart-item__name">
        {{ record.item.name }}
      </span>

      <div class="cart-item__info">
        <span class="cart-item__quantity">{{ record.quantity }}x</span>

        <span class="cart-item__price">@ {{ formatPrice(record.item.price) }}</span>

        <span class="cart-item__total">{{ calcRecordTotalPrice(record) }}</span>
      </div>
    </div>
    <a
      class="cart-item__action"
      @click.prevent="emits('removeFromCart', record)"
    >
      <IconClose />
    </a>
  </div>
</template>

<script setup lang="ts">
import type { CartRecord } from "@/types/cart.types";
import formatPrice from "@/utils/formatPrice";

import useCart from "@/composables/useCart";
import IconClose from "./icons/IconClose.vue";

const { calcRecordTotalPrice } = useCart();

const emits = defineEmits<{
  (e: "removeFromCart", product: CartRecord): void;
}>();

const { record } = defineProps<{
  record: CartRecord;
}>();
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.cart-item__name {
  font-weight: 700;
  color: var(--rose-900);
}

.cart-item__info {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.cart-item__quantity {
  font-weight: 700;
  color: var(--red);
}

.cart-item__total {
  font-weight: 600;
}

.cart-item__action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px var(--rose-300) solid;
}

.cart-item__action:hover {
  cursor: pointer;
  opacity: 0.75;
}
</style>
