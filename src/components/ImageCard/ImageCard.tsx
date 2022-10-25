import { FavoriteBorder } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { FC, memo } from "react";
import styles from "./ImageCard.module.scss";

interface ImageCardProps {
  imageUrl: string;
  placeholderUrl: string;
}

const ImageCard: FC<ImageCardProps> = ({ imageUrl, placeholderUrl }) => {
  return (
    <Box className={styles.ImageCard}>
      <Image
        layout="fill"
        objectFit="cover"
        src={imageUrl}
        placeholder={"blur"}
        blurDataURL={placeholderUrl}
      />
      <IconButton className={styles.ButtonLike}>
        <FavoriteBorder className={styles.LikeIcon} />
      </IconButton>
    </Box>
  );
};

export default memo(ImageCard, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
