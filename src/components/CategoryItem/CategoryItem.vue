<script setup lang="ts">
import type { ICategoryItemProps } from "@/types";

defineProps<ICategoryItemProps>();
</script>

<template>
  <div
    class="w-64 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
  >
    <img :src="imageUrl" alt="category image" class="w-full h-48 object-cover rounded-t-lg" />
    <h2 class="mt-4 text-lg font-semibold text-gray-800">{{ name }}</h2>
  </div>
</template>
