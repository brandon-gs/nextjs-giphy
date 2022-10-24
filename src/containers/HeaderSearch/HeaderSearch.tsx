import { InputSearch } from "@/components";
import { Button, Stack } from "@mui/material";
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  return (
    <Stack className={styles.HeaderSearch}>
      <InputSearch />
      <Button className={styles.ButtonSearch}>Buscar</Button>
    </Stack>
  );
};
export default HeaderSearch;
