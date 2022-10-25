import type { GiphyTrendingResponse } from "@/types/Giphy";

const LIMIT = 12; // Limit results by query

interface GetTrendingRequest {
  pageParam: number;
}

export const GiphyService = {
  async getTrending({
    pageParam = 0,
  }: GetTrendingRequest): Promise<GiphyTrendingResponse> {
    const response = await fetch(
      `api/giphy/trending?limit=${LIMIT}&offset=${pageParam * LIMIT}`
    );
    return response.json();
  },
};
