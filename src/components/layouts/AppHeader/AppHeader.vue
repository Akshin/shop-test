<script setup lang="ts">
import { useCartStore } from "@/stores/cart.store";
import { ShoppingCartIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();
</script>

<template>
  <header class="bg-indigo-600 p-4 flex items-center relative justify-between">
    <div class="text-white cursor-pointer" @click="router.push({ name: 'products' })">
      Main page
    </div>
    <div class="relative cursor-pointer" @click="router.push({ name: 'cart' })">
      <ShoppingCartIcon class="w-6 h-6 text-white mr-3" />
      <span
        v-if="cartStore.cartProducts.length"
        class="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
      >
        {{ cartStore.cartProducts.length }}
      </span>
    </div>
  </header>
</template>
