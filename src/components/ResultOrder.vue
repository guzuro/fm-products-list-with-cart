<template>
  <div class="result-order">
    <IconCheck />

    <h2 class="result-order__title">Order Confirmed</h2>

    <span class="result-order__description">We hope you enjoy your food!</span>

    <CartItems readonly />

    <Button
      class="result-order__finish"
      type="red"
      block
      @click="emits('finishOrder')"
    >
      Start New Order
    </Button>
  </div>
</template>

<script setup lang="ts">
import IconCheck from "./icons/IconCheck.vue";
import CartItems from "./CartItems.vue";
import Button from "./Button.vue";

const emits = defineEmits(["finishOrder"]);
</script>

<style scoped>
.result-order__title {
  font-size: 24px;
  font-weight: 700;

  margin-top: 35px;
}

.result-order__description {
  display: inline-block;
  margin-top: 22px;
}

.result-order__items {
  padding: 25px;
  background-color: var(--red-300);
}

.result-order__finish {
  margin-top: 20px;
}
</style>
