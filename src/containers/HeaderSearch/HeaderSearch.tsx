import { InputSearch } from "@/components";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      const search = inputRef.current.value;
      router.push({ href: "/", query: { search } });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const searchOnEnterPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" && inputRef.current) {
        const newSearch = inputRef.current.value;
        let query: Record<string, string> = {};
        if (newSearch) {
          query.search = newSearch;
        }
        router.push({ href: "/", query });
      }
    };
    window.addEventListener("keydown", searchOnEnterPress);
    return () => {
      window.removeEventListener("keydown", searchOnEnterPress);
    };
  }, [inputRef]);

  return (
    <Stack className={styles.HeaderSearch}>
      <InputSearch inputRef={inputRef} onSearch={handleSearch} />
      <Button className={styles.ButtonSearch} onClick={handleSearch}>
        Buscar
      </Button>
    </Stack>
  );
};
export default HeaderSearch;
