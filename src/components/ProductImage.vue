<template>
  <img
    class="product-image"
    alt=""
    :src="imgSrc"
    :width="size"
    :height="size"
    loading="lazy"
  />
</template>

<script setup lang="ts">
import type { Product } from "@/types/products.types";
import useDevice from "@/composables/useBreakpoint";
import { computed } from "vue";

const { image, size } = defineProps<{
  image: Product["image"];
  size?: string;
}>();

const { breakpoint } = useDevice();

const imgSrc = computed(() => {
  const bp = breakpoint.value;
  if (bp.desktop) {
    return new URL(`../assets/images/${image.desktop}`, import.meta.url).href;
  } else if (bp.tablet) {
    return new URL(`../assets/images/${image.tablet}`, import.meta.url).href;
  } else {
    return new URL(`../assets/images/${image.mobile}`, import.meta.url).href;
  }
});
</script>

<style scoped>
.product-image {
  border-radius: 10px;
  max-width: 100%;
  display: block;
}
</style>
