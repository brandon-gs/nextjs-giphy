import { IconButton, TextFieldProps } from "@mui/material";
import { Clear, Search as SearchIcon } from "@mui/icons-material";
import { FC, RefObject, useEffect } from "react";
import { useListenSearchParam } from "@/hooks";
import { useRouter } from "next/router";
import styles from "./InputSearch.module.scss";
import clsx from "clsx";
import dynamic from "next/dynamic";

const TextField = dynamic(() => import("@mui/material/TextField"));

type InputSearchProps = Omit<TextFieldProps, "variant"> & {
  inputRef: RefObject<HTMLInputElement>;
  onSearch: () => void;
};

const InputSearch: FC<InputSearchProps> = ({
  onSearch,
  className,
  InputProps,
  ...props
}) => {
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
      className={clsx(styles.InputSearch, className)}
      variant="standard"
      fullWidth
      placeholder="Buscar"
      InputProps={{
        className: clsx(styles.InputSearchRoot, InputProps?.className),
        name: "search",
        startAdornment: (
          <>
            {search || props.inputRef.current?.value ? (
              <IconButton onClick={clearInput} aria-label="limpiar busqueda">
                <Clear className={styles.SearchIcon} />
              </IconButton>
            ) : (
              <IconButton onClick={onSearch} aria-label="hacer busqueda">
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
