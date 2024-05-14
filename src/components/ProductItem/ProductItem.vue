<script setup lang="ts">
import type { IProductItemProps } from "@/types";

defineProps<IProductItemProps>();
</script>

<template>
  <div
    class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
  >
    <img :src="imageUrl" alt="" />
    <div
      class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50"
    >
      <div class="flex items-center justify-between mb-2">
        <h6 class="font-semibold text-base leading-7 text-black">{{ name }}</h6>
        <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">
          {{ price }}
        </h6>
      </div>
      <p class="text-xs leading-5 text-gray-500">{{ inStock ? "В наличии" : "Нет в наличии" }}</p>
    </div>
  </div>
</template>
