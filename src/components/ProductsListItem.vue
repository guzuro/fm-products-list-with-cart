`
<template>
  <div class="products-list-item">
    <div>
      <ProductImage :image="product.image" />

      <AddToCartButton class="prodcts-list-item__cart-button" />
    </div>

    <span>
      {{ product.category }}
    </span>

    <h2>
      {{ product.name }}
    </h2>

    <span>{{ formattedPrice }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/products.types";
import ProductImage from "./ProductImage.vue";
import AddToCartButton from "./AddToCartButton.vue";
import { computed } from "vue";

const { product } = defineProps<{
  product: Product;
}>();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    currencyDisplay: "narrowSymbol",
  }).format(product.price);
});
</script>

<style scoped>
.products-list-item div {
  position: relative;
}

:deep(.add-to-cart-button) {
  position: absolute;
  top: 85%;
  left: 0;
  transform: translateX(50%);
}
</style>
