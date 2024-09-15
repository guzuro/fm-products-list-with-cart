<template>
  <div class="products-list">
    <h1>Desserts</h1>

    <div class="products-list__grid">
      <template v-if="products">
        <ProductsListItem
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          :product-quantity="cartProduct(product)?.quantity ?? 0"
          :is-in-cart="!!cartProduct(product)"
          @add-to-cart="addToCart"
          @decrement-from-cart="decrementFromCart"
        />
      </template>
      <template v-else> Loading.. </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProductsListItem from "./ProductsListItem.vue";
import type { Product } from "@/types/products.types";
import { reqProducts } from "@/api/products.api";
import useCart from "@/composables/useCart";

const products = ref<Array<Product> | null>(null);

const { addToCart, cartProduct, decrementFromCart } = useCart();

onMounted(() => {
  reqProducts()
    .then((p) => (products.value = p))
    .catch((err) => {
      console.error(err);

      products.value = [];
    });
});
</script>

<style scoped>
.products-list__grid {
  margin-top: 40px;

  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 20px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 968px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
