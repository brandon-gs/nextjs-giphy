import { ImageCardList } from "@/components";
import { useGiphyPagination, useUserLikes } from "@/hooks";
import { GiphyService } from "@/services";
import type { GiphyResponse } from "@/types/Giphy";
import { FC } from "react";

interface GiphySearchListProps {
  search: string;
}

const GiphySearchList: FC<GiphySearchListProps> = ({ search }) => {
  const userLikes = useUserLikes({ listener: true });
  const giphyTrendingData = useGiphyPagination<GiphyResponse>({
    service: GiphyService.getGifs({ search, endpoint: "search" }),
    key: `search-${search}`,
  });

  return <ImageCardList {...giphyTrendingData} {...userLikes} />;
};
export default GiphySearchList;
