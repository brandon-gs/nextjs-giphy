import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import { FC, memo } from "react";
import styles from "./ImageCard.module.scss";

// This component make use of localStorage so we shouldn't use it on ssr
const ImageCardLike = dynamic(() => import("../ImageCardLike/ImageCardLike"), {
  ssr: false,
});

interface ImageCardProps {
  id: string;
  imageUrl: string;
  placeholderUrl: string;
}

const ImageCard: FC<ImageCardProps> = ({ id, imageUrl, placeholderUrl }) => {
  return (
    <Box className={styles.ImageCard}>
      <Image
        layout="fill"
        objectFit="cover"
        src={imageUrl}
        placeholder={"blur"}
        blurDataURL={placeholderUrl}
        alt="Giphy image"
      />
      <ImageCardLike id={id} />
    </Box>
  );
};

export default memo(ImageCard, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
