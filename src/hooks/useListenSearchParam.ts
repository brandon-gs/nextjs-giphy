import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useListenSearchParam = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const querySearch = router.query.search ?? "";
    setSearch((prevSearchState) => {
      if (prevSearchState !== querySearch && typeof querySearch === "string") {
        return querySearch;
      }
      return prevSearchState;
    });
  }, [router]);
  return { search };
};
export default useListenSearchParam;
