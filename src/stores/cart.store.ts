import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { IProductItem } from "@/types";
import { formatCurrency } from "@/utils/formatters";

export const useCartStore = defineStore("cart", () => {
  const cartProducts = ref<IProductItem[]>([]);

  const totalPrice = computed<string>(() => {
    const result = cartProducts.value.reduce((sum, product) => (sum += product.price), 0);
    return formatCurrency(result);
  });

  function addProduct(product: IProductItem): void {
    if (cartProducts.value.some((_product) => _product.id === product.id)) return;

    cartProducts.value.push(product);
  }

  function removeProduct(productId: number) {
    const index = cartProducts.value.findIndex((product) => product.id === productId);
    cartProducts.value.splice(index, 1);
  }

  function clearCart() {
    cartProducts.value = [];
  }

  return {
    cartProducts,
    totalPrice,
    addProduct,
    removeProduct,
    clearCart
  };
});
