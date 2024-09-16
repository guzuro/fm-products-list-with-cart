<template>
  <Button @click="emits('click')">
    <IconAddToCart class="add-to-cart-button__icon" />
    <span> Add to Cart </span>
  </Button>
</template>

<script setup lang="ts">
import IconAddToCart from "./icons/IconAddToCart.vue";
import Button from "./Button.vue";

const emits = defineEmits(["click"]);
</script>

<style scoped>
.add-to-cart-button:hover {
  cursor: pointer;
  background-color: var(--rose-100);
}

.add-to-cart-button__icon {
  vertical-align: text-bottom;
}
</style>
