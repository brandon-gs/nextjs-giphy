import { ImageCardList } from "@/components";
import { useGiphyPagination } from "@/hooks";
import { GiphyService } from "@/services";
import { GiphyTrendingResponse } from "@/types/Giphy";

const GiphyTrendinList = () => {
  const giphyTrendingData = useGiphyPagination<GiphyTrendingResponse>({
    service: GiphyService.getTrending,
  });
  return <ImageCardList {...giphyTrendingData} />;
};
export default GiphyTrendinList;
