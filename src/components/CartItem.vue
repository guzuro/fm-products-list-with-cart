<template>
  <div class="cart-item">
    <ProductImage
      v-if="readonly"
      size="50px"
      :image="record.item.image"
    />

    <div class="cart-item__body">
      <span class="cart-item__name">
        {{ record.item.name }}
      </span>

      <div class="cart-item__info">
        <span class="cart-item__quantity">{{ record.quantity }}x</span>

        <span class="cart-item__price">@ {{ formatPrice(record.item.price) }}</span>

        <span
          v-if="!readonly"
          class="cart-item__total"
          >{{ calcRecordTotalPrice(record) }}</span
        >
      </div>
    </div>

    <IconButton
      v-if="!readonly"
      class="cart-item__action"
      @click="emits('removeFromCart', record)"
    >
      <IconClose />
    </IconButton>
    <span
      v-else
      class="cart-item__total"
      >{{ calcRecordTotalPrice(record) }}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { CartRecord } from "@/types/cart.types";
import formatPrice from "@/utils/formatPrice";

import useCart from "@/composables/useCart";
import IconClose from "./icons/IconClose.vue";
import IconButton from "./IconButton.vue";
import ProductImage from "./ProductImage.vue";

const { calcRecordTotalPrice } = useCart();

const emits = defineEmits<{
  (e: "removeFromCart", product: CartRecord): void;
}>();

const { record, readonly } = defineProps<{
  record: CartRecord;
  readonly: boolean;
}>();
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item :deep(.product-image) {
  flex-shrink: 0;
}

.cart-item__body {
  flex: 1;
}

.cart-item__name {
  font-weight: 700;
  color: var(--rose-900);
}

.cart-item__info {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 15px;
}

.cart-item__quantity {
  font-weight: 700;
  color: var(--red);
}

.cart-item__total {
  font-weight: 600;
}
</style>
