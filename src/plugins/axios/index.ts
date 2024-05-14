import axios from "axios";
import type { IApiServiceRequestMethodParams, IApiServiceResponse } from "@/types";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

async function axiosRequest({
  method,
  path,
  payload,
  params
}: IApiServiceRequestMethodParams): Promise<IApiServiceResponse> {
  if (method === "get" || method === "delete") {
    return axios[method](path, params);
  } else {
    return axios[method](path, payload, params);
  }
}

export { axiosRequest };
