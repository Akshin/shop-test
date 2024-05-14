import type { IAppSettings } from "@/types";

export const appSettings: IAppSettings = {
  storeId: import.meta.env.VITE_STORE_ID,
  authToken: import.meta.env.VITE_AUTH_TOKEN,
  apiUrl: import.meta.env.VITE_API_URL
};
