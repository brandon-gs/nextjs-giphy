import { GiphyResponse } from "@/types/Giphy";
import type { NextApiRequest, NextApiResponse } from "next";

type SuccessData = GiphyResponse;
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
    const query = req.query as Record<string, string>;
    const endpoint = query.endpoint;
    delete query.endpoint;
    const paginationQuery = new URLSearchParams(query).toString();
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${process.env.GIPHY_KEY}&${paginationQuery}`,
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
