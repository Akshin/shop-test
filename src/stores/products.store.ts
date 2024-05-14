import { apiService } from "@/services";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { IProductsResponse, ICategoryResponse, ICategoryItem, IProductItem } from "@/types";

export const useProductsStore = defineStore("products", () => {
  const categories = ref<ICategoryItem[]>([]);
  const categorySelected = ref<ICategoryItem | null>(null);
  const products = ref<IProductItem[]>([]);
  const product = ref<IProductItem | null>(null);

  async function getCategories(parentCategoryId?: number): Promise<ICategoryResponse> {
    try {
      const { data } = await apiService.request({
        name: "getCategories",
        pathParams: { parentCategoryId }
      });
      categories.value = data.items;
      return data;
    } catch (e) {
      throw e;
    }
  }

  async function getProducts(categoryId?: number): Promise<IProductsResponse> {
    try {
      const { data } = await apiService.request({
        name: "getProducts",
        pathParams: { categoryId }
      });
      products.value = data.items;
      return data;
    } catch (e) {
      throw e;
    }
  }

  async function getProduct(productId: number): Promise<IProductsResponse> {
    product.value = null;
    try {
      const { data } = await apiService.request({
        name: "getProduct",
        pathParams: { productId }
      });
      product.value = data;
      return data;
    } catch (e) {
      throw e;
    }
  }

  function setParrentCategory(categoryId: number): void {
    categorySelected.value =
      categories.value.find((category) => category.id === categoryId) || null;
  }

  return {
    categories,
    categorySelected,
    products,
    product,
    getCategories,
    getProducts,
    setParrentCategory,
    getProduct
  };
});
