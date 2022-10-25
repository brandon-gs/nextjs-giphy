import { IconButton, TextField, TextFieldProps } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import styles from "./InputSearch.module.scss";
import { FC } from "react";

type InputSearchProps = Omit<TextFieldProps, "variant">;

const InputSearch: FC<InputSearchProps> = (props) => {
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
      {...props}
    />
  );
};
export default InputSearch;
