import { IconButton, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import styles from "./InputSearch.module.scss";

const InputSearch = () => {
  return (
    <TextField
      className={styles.InputSearch}
      variant="standard"
      fullWidth
      placeholder="Buscar"
      InputProps={{
        className: styles.InputSearchRoot,
        name: "search",
        startAdornment: (
          <IconButton>
            <SearchIcon className={styles.SearchIcon} />
          </IconButton>
        ),
        disableUnderline: true,
      }}
    />
  );
};
export default InputSearch;
