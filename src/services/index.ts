import { methods } from "@/data/methods.data";
import { axiosRequest } from "@/plugins/axios";
import { ApiService } from "./apiService";
import { appSettings } from "@/settings";

const apiService = new ApiService(() => appSettings.authToken, axiosRequest, methods);
export { apiService };
