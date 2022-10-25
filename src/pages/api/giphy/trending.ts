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
    const query = new URLSearchParams(
      req.query as Record<string, string>
    ).toString();
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_KEY}&${query}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al obtener las imágenes", error: true });
  }
}
