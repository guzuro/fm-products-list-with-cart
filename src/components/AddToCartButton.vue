<template>
  <a class="add-to-cart-button">
    <IconAddToCart class="add-to-cart-button__icon" />
    <span> Add to Cart </span>
  </a>
</template>

<script setup lang="ts">
import IconAddToCart from "./icons/IconAddToCart.vue";
</script>

<style scoped>
.add-to-cart-button {
  user-select: none;
  color: var(--rose-900);

  background-color: var(--rose-50);
  font-weight: 600;
  white-space: nowrap;
  padding: 12px 28px;

  border: 1px var(--rose-300) solid;
  border-radius: 30px;
}

.add-to-cart-button:hover {
  cursor: pointer;
  background-color: var(--rose-100);
}

.add-to-cart-button__icon {
  vertical-align: text-bottom;
}
</style>
