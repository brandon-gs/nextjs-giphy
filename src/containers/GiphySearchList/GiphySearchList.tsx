import { ImageCardList } from "@/components";
import { useGiphyPagination } from "@/hooks";
import { GiphyService } from "@/services";
import type { GiphyResponse } from "@/types/Giphy";
import { FC, useEffect, useLayoutEffect } from "react";

interface GiphySearchListProps {
  search: string;
}

const GiphySearchList: FC<GiphySearchListProps> = ({ search }) => {
  const giphyTrendingData = useGiphyPagination<GiphyResponse>({
    service: GiphyService.getGifs({ search, endpoint: "search" }),
    key: `search-${search}`,
  });

  return <ImageCardList {...giphyTrendingData} />;
};
export default GiphySearchList;
