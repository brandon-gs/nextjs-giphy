import { Skeleton } from "@mui/material";
import styles from "./ImageCard.module.scss";

const ImageCardSkeleton = () => {
  return <Skeleton variant="rectangular" className={styles.ImageCard} />;
};
export default ImageCardSkeleton;
