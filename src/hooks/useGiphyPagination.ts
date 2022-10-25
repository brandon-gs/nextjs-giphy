import { GiphyPagination } from "@/types/Giphy";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import useDebounceEffect from "./useDebounceEffect";
import useNearScreen from "./useNearScreen";

interface UseGiphyPaginationParams<ApiResponse> {
  service: ({ pageParam }: { pageParam: number }) => Promise<ApiResponse>;
  key: string;
}

const useGiphyPagination = <
  ApiResponse extends { pagination: GiphyPagination }
>({
  service,
  key,
}: UseGiphyPaginationParams<ApiResponse>) => {
  const { isNearScreen, observerRef } = useNearScreen({
    distance: 2000,
    once: false,
  });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
    status,
  } = useInfiniteQuery<ApiResponse>(
    [key],
    async ({ pageParam = 0 }) => await service({ pageParam }),
    {
      getNextPageParam: (prevPage: ApiResponse, pages: Array<ApiResponse>) =>
        prevPage.pagination.next_page,
      refetchOnWindowFocus: false,
    }
  );

  const handleFetchNextPage = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useDebounceEffect({
    callback: handleFetchNextPage,
    condition:
      isNearScreen && hasNextPage && !isFetching && !isFetchingNextPage,
  });

  return {
    status,
    isFetching,
    isFetchingNextPage,
    error,
    data,
    hasNextPage,
    observerRef,
    fetchNextPage,
    refetch,
  };
};
export default useGiphyPagination;
