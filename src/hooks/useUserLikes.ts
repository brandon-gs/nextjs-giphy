import { useEffect, useState } from "react";

export type UserLikes = Record<string, boolean>;

interface UseUserLikesParams {
  listener: boolean;
}

export interface UseUserLikes {
  likes: UserLikes;
  addLike: (id: string) => () => void;
  removeLike: (id: string) => () => void;
}

const useUserLikes = ({ listener }: UseUserLikesParams): UseUserLikes => {
  const [likes, setLikes] = useState<UserLikes>({});

  const getAllLikes = (): UserLikes => {
    return JSON.parse(localStorage.getItem("likes") ?? "{}");
  };

  const addLike = (newLikeId: string) => () => {
    const likes = getAllLikes();
    const newLikes = { ...likes, [newLikeId]: true };
    setLikes(newLikes);
    localStorage.setItem("likes", JSON.stringify(newLikes));
  };

  const removeLike = (removeLikeId: string) => () => {
    const likes = getAllLikes();
    delete likes[removeLikeId];
    setLikes(likes);
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  useEffect(() => {
    if (!listener) return;

    const syncLikes = () => {
      if (localStorage) {
        const likes = getAllLikes();
        setLikes(likes);
      }
    };
    syncLikes();
    window.addEventListener("focus", syncLikes);
    return () => {
      window.removeEventListener("focus", syncLikes);
    };
  }, []);

  return { likes, addLike, removeLike };
};
export default useUserLikes;
