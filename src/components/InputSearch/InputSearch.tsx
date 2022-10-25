import { IconButton, TextField, TextFieldProps } from "@mui/material";
import { Clear, Search as SearchIcon } from "@mui/icons-material";
import { FC, RefObject, useEffect } from "react";
import { useListenSearchParam } from "@/hooks";
import { useRouter } from "next/router";
import styles from "./InputSearch.module.scss";

type InputSearchProps = Omit<TextFieldProps, "variant"> & {
  inputRef: RefObject<HTMLInputElement>;
  onSearch: () => void;
};

const InputSearch: FC<InputSearchProps> = ({ onSearch, ...props }) => {
  const router = useRouter();
  const { search } = useListenSearchParam();

  const clearInput = () => {
    if (props.inputRef.current) {
      props.inputRef.current.value = "";
      router.push({ pathname: "/" });
    }
  };

  useEffect(() => {
    if (props.inputRef.current) {
      props.inputRef.current.value = search;
    }
  }, [search]);

  return (
    <TextField
      defaultValue={search}
      className={styles.InputSearch}
      variant="standard"
      fullWidth
      placeholder="Buscar"
      InputProps={{
        className: styles.InputSearchRoot,
        name: "search",
        startAdornment: (
          <>
            {search || props.inputRef.current?.value ? (
              <IconButton onClick={clearInput}>
                <Clear className={styles.SearchIcon} />
              </IconButton>
            ) : (
              <IconButton onClick={onSearch}>
                <SearchIcon className={styles.SearchIcon} />
              </IconButton>
            )}
          </>
        ),
        disableUnderline: true,
      }}
      {...props}
    />
  );
};
export default InputSearch;
