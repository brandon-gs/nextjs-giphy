import { ImageCardList } from "@/components";
import { useGiphyPagination, useUserLikes } from "@/hooks";
import { GiphyService } from "@/services";
import { GiphyResponse } from "@/types/Giphy";

const GiphyTrendingList = () => {
  const userLikes = useUserLikes({ listener: true });
  const giphyTrendingData = useGiphyPagination<GiphyResponse>({
    service: GiphyService.getGifs({ endpoint: "trending" }),
    key: "trending",
  });
  return <ImageCardList {...giphyTrendingData} {...userLikes} />;
};
export default GiphyTrendingList;
