import React from "react";

/*Styles*/
import styles from "./Container.module.css";

export const Container: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}): JSX.Element => {
  return <div className={styles["container"]}>{children}</div>;
};
export default Container;
