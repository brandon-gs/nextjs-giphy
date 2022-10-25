import { InputSearch } from "@/components";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    router.push({ href: "/", query: { search } });
  };

  return (
    <Stack className={styles.HeaderSearch}>
      <InputSearch onChange={handleChangeSearch} value={search} />
      <Button className={styles.ButtonSearch} onClick={handleSearch}>
        Buscar
      </Button>
    </Stack>
  );
};
export default HeaderSearch;
