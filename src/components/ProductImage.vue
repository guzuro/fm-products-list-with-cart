<template>
  <img
    class="product-image"
    alt=""
    :src="imgSrc"
    loading="lazy"
  />
</template>

<script setup lang="ts">
import type { Product } from "@/types/products.types";
import useDevice from "@/composables/useBreakpoint";
import { computed } from "vue";

const { image } = defineProps<{
  image: Product["image"];
}>();

const { breakpoint } = useDevice();

const imgSrc = computed(() => {
  const bp = breakpoint.value;

  if (bp.desktop) {
    return new URL(image.desktop, import.meta.url).href;
  } else if (bp.tablet) {
    return new URL(image.tablet, import.meta.url).href;
  } else {
    return new URL(image.mobile, import.meta.url).href;
  }
});
</script>

<style scoped>
.product-image {
  border-radius: 10px;
  width: 100%;
  display: block;
}
</style>
