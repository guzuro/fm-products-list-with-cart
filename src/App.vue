<script setup lang="ts">
import ProductsList from "./components/ProductsList.vue";
</script>

<template>
  <main>
    <div class="container">
      <div class="shop">
        <ProductsList />

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, beatae delectus eius
          repudiandae velit pariatur laborum autem ipsum harum corporis voluptate quam placeat
          obcaecati commodi accusamus officiis. Nihil, sit incidunt!
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.shop {
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 20px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 968px) {
    grid-template-columns: 2fr 1fr;
  }
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 34px 24px;
}
</style>
