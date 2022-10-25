import ImageCard from "@/components/ImageCard/ImageCard";
import { GiphyService } from "@/services";
import { GiphyTrendingResponse } from "@/types/Giphy";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useCallback } from "react";

const useGiphyTrending = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<GiphyTrendingResponse>(
    ["trending"],
    async ({ pageParam = 0 }) => await GiphyService.getTrending({ pageParam }),
    {
      getNextPageParam: (
        prevPage: GiphyTrendingResponse,
        pages: Array<GiphyTrendingResponse>
      ) => prevPage.pagination.next_page,
      refetchOnWindowFocus: false,
    }
  );

  const handleFetchNextPage = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const render = useCallback(() => {
    const isLoadingFirstPage = isFetching && !isFetchingNextPage;
    const isError = error !== null;

    if (status === "loading" || isLoadingFirstPage) {
      return <p>loading</p>;
    }

    if (status === "error" || isError) {
      return <p>error</p>;
    }

    return (
      <>
        <p>data loaded</p>
        {data.pages.map((group, idx) => (
          <Fragment key={`group-trending-${idx}`}>
            {group.data.map((image, col) => (
              <ImageCard
                key={`${image.id}-row-${idx}-col${col}`}
                imageUrl={image.images.original.webp}
                placeholderUrl={image.images.preview_webp.url}
              />
            ))}
          </Fragment>
        ))}
        <div>
          <button
            onClick={() => handleFetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </div>
      </>
    );
  }, [
    status,
    error,
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
  ]);

  return { render };
};
export default useGiphyTrending;
