`
<template>
  <div class="products-list-item">
    <div class="products-list-item__header">
      <ProductImage :image="product.image" />

      <AddToCartButton
        v-if="!isInCart"
        class="prodcts-list-item__cart-button"
        @click="emits('addToCart', product)"
      />
      <QuantityBlock
        v-else
        class="prodcts-list-item__cart-button"
        :quantity="productQuantity"
        @increment="emits('addToCart', product)"
        @decrement="emits('decrementFromCart', product)"
      />
    </div>

    <div class="products-list-item__category">
      {{ product.category }}
    </div>

    <h2 class="products-list-item__name">
      {{ product.name }}
    </h2>

    <div class="products-list-item__price">{{ formatPrice(product.price) }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/products.types";
import ProductImage from "./ProductImage.vue";
import AddToCartButton from "./AddToCartButton.vue";
import QuantityBlock from "./QuantityBlock.vue";
import formatPrice from "@/utils/formatPrice";

const emits = defineEmits<{
  (e: "addToCart", product: Product): void;
  (e: "decrementFromCart", product: Product): void;
}>();

const { product, isInCart, productQuantity } = defineProps<{
  product: Product;
  isInCart: boolean;
  productQuantity: number;
}>();
</script>

<style scoped>
.prodcts-list-item__cart-button {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
}

.products-list-item {
  width: 100%;
}

.products-list-item__header {
  position: relative;
}

.products-list-item__category {
  margin-top: 40px;
}
.products-list-item__name,
.products-list-item__price {
  margin-top: 10px;
}

.products-list-item__name {
  color: var(--rose-900);
}

.products-list-item__price {
  color: var(--red);
}
</style>
