<script setup lang="ts">
import type { ICartProductItemProps } from "@/types";
defineProps<ICartProductItemProps>();
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
    <div
      class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
    >
      <div class="img-box">
        <img :src="imageUrl" alt="" class="xl:w-[140px]" />
      </div>
      <div class="pro-data w-full max-w-sm">
        <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
          {{ name }}
        </h5>
      </div>
    </div>
    <div class="flex justify-end pr-10">
      <h6 class="text-indigo-600 font-manrope text-2xl leading-9">{{ price }}</h6>
    </div>
  </div>
</template>
