import { useRoute } from "vue-router";

export const useRouteParams = () => {
  const route = useRoute();

  function getRouteParam(paramName: string): string {
    const params = route.params[paramName];
    if (Array.isArray(params)) return params[0];

    return params;
  }

  return { getRouteParam };
};
