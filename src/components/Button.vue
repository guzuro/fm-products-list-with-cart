<template>
  <a
    class="button"
    :class="[buttonClassType, buttonBlock]"
    @click.prevent="emits('click')"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emits = defineEmits(["click"]);

const { type = "default", block = false } = defineProps<{
  type?: "red" | "default";
  block?: boolean;
}>();

const buttonClassType = computed(() => {
  if (type === "red") {
    return "button-red";
  } else {
    return "button-default";
  }
});

const buttonBlock = computed(() => {
  if (block) {
    return "button-block";
  } else {
    return "";
  }
});
</script>

<style scoped>
.button {
  display: inline-block;
  user-select: none;

  font-weight: 600;
  white-space: nowrap;
  padding: 12px 25px;

  border-radius: 30px;
}

.button:hover {
  cursor: pointer;
  background-color: var(--rose-100);
}

.button-default {
  color: var(--rose-900);
  background-color: var(--rose-50);
  border: 1px var(--rose-300) solid;
}

.button-red {
  background-color: var(--red);
  color: white;
}

.button-red:hover {
  color: var(--red);
}

.button-block {
  width: 100%;
  text-align: center;
}
</style>
