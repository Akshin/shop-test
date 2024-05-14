import { appSettings } from "@/settings";
import type { IApiServiceMethodData, IApiServiceObject } from "@/types";

const API_URL: string = `${appSettings.apiUrl}/api/v3/${appSettings.storeId}`;

export const methods: IApiServiceMethodData = {
  getCategories({ parentCategoryId }: IApiServiceObject = {}) {
    let path = `${API_URL}/categories`;
    if (parentCategoryId) path += `?parent=${parentCategoryId}`;

    return {
      path,
      method: "get",
      params: {}
    };
  },
  getProducts({ categoryId }: IApiServiceObject = {}) {
    let path = `${API_URL}/products`;
    if (categoryId) path += `?category=${categoryId}`;

    return {
      path,
      method: "get",
      params: {}
    };
  },
  getProduct({ productId }: IApiServiceObject = {}) {
    return {
      path: `${API_URL}/products/${productId}`,
      method: "get",
      params: {}
    };
  }
};
