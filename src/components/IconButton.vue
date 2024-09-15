<template>
  <a
    class="icon-button"
    @click.prevent="emits('click')"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
const emits = defineEmits(["click"]);
</script>

<style scoped>
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px var(--rose-300) solid;
}

.icon-button:hover {
  cursor: pointer;
  background-color: white;
}

.icon-button:hover :deep(path) {
  fill: var(--red);
}
</style>
