<script setup lang="ts">
import ProductsList from "./components/ProductsList.vue";
</script>

<template>
  <main>
    <div class="container">
      <h1>Desserts</h1>

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
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 34px 24px;

  @media screen and (min-width: 1440px) {
  }
  /* padding-left:;
  padding-right:; */

  /* @media (min-width: 375px) {
    max-width: 23.5rem;
  }

  @media (min-width: 1200px) {
    max-width: 1440px;
  } */
}
</style>
