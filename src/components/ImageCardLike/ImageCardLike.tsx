import { UseUserLikes } from "@/hooks/useUserLikes";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from "./ImageCardLike.module.scss";

interface ImageCardLikeProps extends UseUserLikes {
  id: string;
}

const ImageCardLike = ({
  id,
  likes,
  addLike,
  removeLike,
}: ImageCardLikeProps) => {
  const isLiked = Boolean(likes[id]);

  if (isLiked) {
    return (
      <IconButton
        className={styles.ImageCardLike}
        onClick={removeLike(id)}
        aria-label="quitar me gusta"
      >
        <Favorite className={styles.LikeIconFill} />
      </IconButton>
    );
  }

  return (
    <IconButton
      className={styles.ImageCardLike}
      onClick={addLike(id)}
      aria-label="agregar a me gusta"
    >
      <FavoriteBorder className={styles.LikeIcon} />
    </IconButton>
  );
};
export default ImageCardLike;
