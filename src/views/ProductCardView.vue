<script setup lang="ts">
import { useProductsStore } from "@/stores/products.store";
import { computed, ref } from "vue";
import { useRouteParams } from "@/composables/useRouteParams";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart.store";
import Loader from "@/components/Loader/Loader.vue";

const productStore = useProductsStore();
const cartStore = useCartStore();
const { getRouteParam } = useRouteParams();
const router = useRouter();

const loading = ref<boolean>(false);
const productId = getRouteParam("productId");

if (!productId) {
  router.push({ name: "ProductNotFounded" });
}

const product = computed(() => productStore.product);

async function getProduct(): Promise<void> {
  loading.value = true;
  try {
    await productStore.getProduct(Number(productId));
  } catch (e) {
    console.log(e);
  }
  loading.value = false;
}

getProduct();
</script>

<template>
  <div
    class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
  >
    <div v-if="product" class="flex w-full transform text-left text-base transition">
      <div
        class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8"
      >
        <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div class="sm:col-span-4">
            <img :src="product.thumbnailUrl" alt="" class="object-cover object-center" />
          </div>
          <div class="sm:col-span-8 lg:col-span-7">
            <h2 class="text-2xl font-bold text-gray-900 sm:pr-12 mb-4">{{ product.name }}</h2>
            <section aria-labelledby="information-heading" class="mb-10">
              <p class="text-2xl text-gray-900 mb-4">
                {{ product.defaultDisplayedPriceFormatted }}
              </p>
              <p v-html="product.description"></p>
            </section>
            <button
              class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-500 font-semibold text-lg text-white flex transition-all duration-500"
              @click="cartStore.addProduct(product)"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>
