<template>
  <div class="products-list">
    <ProductsListItem
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProductsListItem from "./ProductsListItem.vue";
import type { Product } from "@/types/products.types";
import { reqProducts } from "@/api/products.api";

const products = ref<Array<Product> | null>(null);

onMounted(() => {
  reqProducts()
    .then((p) => (products.value = p))
    .catch((err) => {
      console.error(err);

      products.value = [];
    });
});
</script>

<style scoped></style>
