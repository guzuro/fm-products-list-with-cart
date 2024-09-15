<template>
  <a class="add-to-cart-button">
    <IconAddToCart class="icon" />
    Add to Cart
  </a>
</template>

<script setup lang="ts">
import IconAddToCart from "./icons/IconAddToCart.vue";
</script>

<style scoped>
.add-to-cart-button {
  color: var(--rose-900);

  background-color: var(--rose-50);
  font-weight: 600;

  display: inline-flex;
  align-items: center;
  padding: 12px 28px;

  border: 1px var(--rose-300) solid;
  border-radius: 30px;
}

.icon {
  vertical-align: middle;
}
</style>
