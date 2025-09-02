import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { ApiAuthModes, ApiVersions } from "@/types/enums";
import { BASE_URL } from "@/utils/constants";

export const useAxiosApi = (
  apiAuthMode: ApiAuthModes,
  apiVersion: ApiVersions = ApiVersions.V1
) => {
  const accessToken = useSelector(
    (state: RootState) => state.auth.token?.access_token
  );

  const AxiosApi: AxiosInstance = axios.create({
    baseURL: BASE_URL + "/" + apiVersion,
  });

  AxiosApi.defaults.headers["Access-Control-Allow-Origin"] = "*";
  AxiosApi.defaults.headers["Content-Type"] = "application/json";
  AxiosApi.defaults.headers["Accept"] = "application/json";

  AxiosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (apiAuthMode === ApiAuthModes.BearerToken && accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  });

  return AxiosApi;
};
