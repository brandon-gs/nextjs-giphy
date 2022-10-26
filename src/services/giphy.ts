import type { GiphyResponse } from "@/types/Giphy";

const LIMIT = 12; // Limit results by query

interface PaginationRequest {
  pageParam: number;
}

interface GiphyParamsRequest {
  endpoint: "search" | "trending";
  search?: string;
}

export const GiphyService = {
  getGifs:
    ({ endpoint, search }: GiphyParamsRequest) =>
    async ({ pageParam = 0 }: PaginationRequest): Promise<GiphyResponse> => {
      const searchParam = search ? `q=${search}&lang=es` : "";
      const response = await fetch(
        `api/giphy?endpoint=${endpoint}&limit=${LIMIT}&offset=${
          pageParam * LIMIT
        }&${searchParam}`
      );
      return response.json();
    },
};
