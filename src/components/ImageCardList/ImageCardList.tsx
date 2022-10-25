import { FC, Fragment } from "react";
import type { GiphyResponse } from "@/types/Giphy";
import ImageCard from "../ImageCard/ImageCard";
import { Stack } from "@mui/material";
import ImageCardListSkeleton from "./ImageCardListSkeleton";
import styles from "./ImageCardList.module.scss";
import { InfiniteData } from "@tanstack/react-query";

interface ImageCardListProps {
  status: "loading" | "success" | "error";
  isFetching: boolean;
  isFetchingNextPage: boolean;
  data?: InfiniteData<GiphyResponse>;
  hasNextPage?: boolean;
  error: unknown;
  observerRef: (node: HTMLDivElement) => void;
}

const ImageCardList: FC<ImageCardListProps> = ({
  status,
  isFetching,
  isFetchingNextPage,
  data,
  error,
  hasNextPage,
  observerRef,
}) => {
  const isError = error !== null;
  const isLoadingFirstPage = isFetching && !isFetchingNextPage;

  if (status === "loading" && isLoadingFirstPage) {
    return <ImageCardListSkeleton />;
  }

  if (data === undefined || isError) {
    return <p>Retry get data</p>;
  }

  return (
    <Fragment>
      <Stack className={styles.ImageCardList}>
        {data.pages.map((group, idx) => (
          <Fragment key={`group-trending-${idx}`}>
            {group.data.map(({ id, images }, index) => (
              <ImageCard
                key={`image-${id}-idx-${index}`}
                id={id}
                imageUrl={images.original.webp}
                placeholderUrl={images.preview_webp.url}
              />
            ))}
          </Fragment>
        ))}
      </Stack>
      {hasNextPage && (
        <>
          <ImageCardListSkeleton />
          {!isFetchingNextPage && <div ref={observerRef} />}
        </>
      )}
    </Fragment>
  );
};

export default ImageCardList;
