<script setup lang="ts">
import { useProductsStore } from "@/stores/products.store";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Loader from "@/components/Loader/Loader.vue";
import CategoryItem from "@/components/CategoryItem/CategoryItem.vue";
import ProductItem from "@/components/ProductItem/ProductItem.vue";
import { useRouteParams } from "@/composables/useRouteParams";

const productStore = useProductsStore();
const { getRouteParam } = useRouteParams();
const route = useRoute();
const router = useRouter();
const loading = ref<boolean>(false);

async function getCategoriesAndProducts(): Promise<void> {
  loading.value = true;
  try {
    const param = getRouteParam("categoryId");
    const categoryId = param ? Number(param) : undefined;
    if (categoryId) productStore.setParrentCategory(categoryId);
    await productStore.getCategories(categoryId);
    await productStore.getProducts(categoryId);
  } catch (e) {
    console.log(e);
  }
  loading.value = false;
}

watch(
  () => route.params.categoryId,
  () => getCategoriesAndProducts(),
  { immediate: true }
);
</script>

<template>
  <div class="product-list-wrapper mt-1">
    <div v-if="!loading">
      <div class="mt-10" v-if="productStore.categories.length">
        <h2 class="font-manrope font-bold text-4xl text-center">Categories</h2>
        <div class="flex flex-wrap justify-center mb-20 space-x-4">
          <CategoryItem
            v-for="category in productStore.categories"
            :key="category.id"
            :imageUrl="category.thumbnailUrl"
            :name="category.name"
            @click="router.push({ name: 'products', params: { categoryId: category.id } })"
          />
        </div>
      </div>
      <div class="mt-10">
        <h2 class="font-manrope font-bold text-4xl text-center">Products</h2>
        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          v-if="productStore.products.length"
        >
          <ProductItem
            v-for="product in productStore.products"
            :key="product.id"
            :price="product.defaultDisplayedPriceFormatted"
            :name="product.name"
            :inStock="product.inStock"
            :imageUrl="product.thumbnailUrl"
            @click="router.push({ name: 'productCard', params: { productId: product.id } })"
          />
        </div>
        <p v-else>No available products</p>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>
