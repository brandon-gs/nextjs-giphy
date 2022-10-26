import { FC, PropsWithChildren } from "react";
import styles from "./Center.module.scss";

const Center: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.Center}>{children}</div>;
};
export default Center;
