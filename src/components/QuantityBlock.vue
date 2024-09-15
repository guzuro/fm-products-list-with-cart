<template>
  <div class="quantity-button">
    <div class="quantity-button__inner">
      <IconButton @click="emits('decrement')">
        <IconDecrement />
      </IconButton>
      <span class="quantity-button__count"> {{ quantity }} </span>
      <IconButton @click="emits('increment')">
        <IconIncrement />
      </IconButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconIncrement from "./icons/IconIncrement.vue";
import IconDecrement from "./icons/IconDecrement.vue";
import IconButton from "./IconButton.vue";

const emits = defineEmits(["increment", "decrement"]);

const { quantity } = defineProps<{
  quantity: number;
}>();
</script>

<style scoped>
.quantity-button {
  display: inline-block;

  user-select: none;

  background-color: var(--red);
  white-space: nowrap;
  padding: 12px 25px;

  border-radius: 30px;
}

.quantity-button__inner {
  display: flex;
  gap: 35px;
  align-items: center;
}

.quantity-button__count {
  color: white;
}
</style>
