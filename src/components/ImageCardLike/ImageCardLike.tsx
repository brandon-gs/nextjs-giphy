import { useUserLikes } from "@/hooks";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from "./ImageCardLike.module.scss";

interface ImageCardLikeProps {
  id: string;
}

const ImageCardLike = ({ id }: ImageCardLikeProps) => {
  const { likes, addLike, removeLike } = useUserLikes();
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
