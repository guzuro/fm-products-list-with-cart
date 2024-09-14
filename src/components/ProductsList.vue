<template>
  <div class="products-list">
    <ProductsListItem />
    <ProductsListItem />
    <ProductsListItem />
  </div>
</template>

<script setup lang="ts">
import ProductsListItem from "./ProductsListItem.vue";
import items from "../includes/data.json";

console.log(items);
</script>

<style scoped></style>
