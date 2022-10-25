import { Stack } from "@mui/material";
import { FC, useMemo } from "react";
import ImageCardSkeleton from "../ImageCard/ImageCardSkeleton";

interface ImageCardListSkeletonProps {
  limit?: number;
}

const ImageCardListSkeleton: FC<ImageCardListSkeletonProps> = ({
  limit = 12,
}) => {
  const skeletonArray = useMemo(() => {
    return new Array(limit).fill(0);
  }, [limit]);

  return (
    <Stack direction="row" flexWrap={"wrap"} gap={"44px"}>
      {skeletonArray.map((number, index) => (
        <ImageCardSkeleton key={`image-card-skeleton-${index}`} />
      ))}
    </Stack>
  );
};
export default ImageCardListSkeleton;
