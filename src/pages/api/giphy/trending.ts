import { GiphyTrendingResponse } from "@/types/Giphy";
import type { NextApiRequest, NextApiResponse } from "next";

type SuccessData = GiphyTrendingResponse;
type ErrorData = {
  message: string;
  error: boolean;
};
type Data = SuccessData | ErrorData;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const limit = parseInt(req.query.limit as string) ?? 20;
    const query = new URLSearchParams(
      req.query as Record<string, string>
    ).toString();
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_KEY}&${query}`,
      {
        method: "GET",
      }
    );
    const data = (await response.json()) as SuccessData;
    const hasNextPage =
      data.pagination.count + data.pagination.offset <
      data.pagination.total_count;
    const nextPage = hasNextPage
      ? Math.round(data.pagination.offset / limit) + 1
      : null;
    res.json({
      ...data,
      pagination: { ...data.pagination, next_page: nextPage },
    });
    res.status(data.meta.status).end();
  } catch (error) {
    res.status(500).end();
  }
}
