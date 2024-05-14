<script setup lang="ts">
import CartProductItem from "@/components/CartProductItem/CartProductItem.vue";
import { useCartStore } from "@/stores/cart.store";

const cartStore = useCartStore();

function placeOrder() {
  alert("Well done!");
  cartStore.clearCart();
}
</script>

<template>
  <div class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
      <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
        Shopping Cart
      </h2>
      <div class="hidden lg:grid grid-cols-2 py-6">
        <div class="font-normal text-xl leading-8 text-gray-500">Product</div>
        <p class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-end pr-10">
          Price
        </p>
      </div>
      <CartProductItem
        v-for="product in cartStore.cartProducts"
        @delete="cartStore.removeProduct(product.id)"
        :key="product.id"
        :productId="product.id"
        :imageUrl="product.thumbnailUrl"
        :name="product.name"
        :price="product.defaultDisplayedPriceFormatted"
      />

      <div class="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
        <div class="flex items-center justify-between w-full py-6">
          <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
          <h6 class="font-manrope text-2xl leading-9 text-indigo-500 font-bold">
            {{ cartStore.totalPrice }}
          </h6>
        </div>
      </div>
      <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
        <button
          class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700"
          :disabled="!cartStore.cartProducts.length"
          @click="placeOrder"
        >
          Place order
        </button>
      </div>
    </div>
  </div>
</template>
