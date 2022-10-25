import { ImageCardList } from "@/components";
import { useGiphyPagination } from "@/hooks";
import { GiphyService } from "@/services";
import { GiphyResponse } from "@/types/Giphy";

const GiphyTrendingList = () => {
  const giphyTrendingData = useGiphyPagination<GiphyResponse>({
    service: GiphyService.getGifs({ endpoint: "trending" }),
    key: "trending",
  });
  return <ImageCardList {...giphyTrendingData} />;
};
export default GiphyTrendingList;
