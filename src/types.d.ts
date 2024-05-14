export interface IAppSettings {
  storeId: string;
  authToken: string;
  apiUrl: string;
}

// api service
export interface IApiServiceObject {
  [key: string]: any;
}

export type IApiServiceMethodType = "get" | "post" | "patch" | "delete" | "put";

export interface IApiServiceMethodResult {
  path: string;
  method: IApiServiceMethodType;
  params?: IApiServiceObject;
}

export interface IApiServiceMethodData {
  [key: string]: (params?: IApiServiceObject) => IApiServiceMethodResult;
}

export interface IApiServiceRequestParams {
  name: string;
  pathParams?: IApiServiceObject;
  payload?: IApiServiceObject;
  customParams?: IApiServiceObject;
}

export type IApiServiceGetTokenMethod = () => string | null | undefined;

export interface IApiServiceRequestMethodParams {
  method: IApiServiceMethodType;
  path: string;
  payload?: IApiServiceObject;
  params?: IApiServiceObject;
}

export type IApiServiceRequestMethod = (params: IApiServiceRequestMethodParams) => Promise;

export interface IApiServiceResponse {
  data: any;
  status?: any;
}

export interface IResponseData {
  count: number;
  limit: number;
  offset: number;
  total: number;
}

// categories
export interface ICategoryResponse extends IResponseData {
  items: ICategoryItem[];
}

export interface ICategoryItem {
  id: number;
  name: string;
  isSampleCategory: boolean;
  thumbnailUrl: string;
  seoTitle?: string;
}

// products
export interface IProductsResponse extends IResponseData {
  items: IProductsItem[];
}

export interface IProductItem {
  id: number;
  thumbnailUrl: string;
  name: string;
  price: number;
  defaultDisplayedPriceFormatted: string;
  description: string;
  inStock: boolean;
}

// components
// CategoryItem.vue
export interface ICategoryItemProps {
  imageUrl: string;
  name: string;
}

// ProductItem.vue
export interface IProductItemProps {
  imageUrl: string;
  name: string;
  price: string;
  inStock: boolean;
}

// CartProductItem.vue
export interface ICartProductItemProps {
  productId: number;
  imageUrl: string;
  name: string;
  price: string;
}

export type ICartProductItemEmits = {
  delete: [productId: number];
};
