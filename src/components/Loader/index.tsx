import React from "react";

/*Styles*/
import styles from "./Loader.module.css";

const Loader: React.FC<{ isPageType?: boolean }> = ({
  isPageType,
}): JSX.Element => {
  return (
    <div
      className={`${styles["loader-wrapper"]} ${
        isPageType ? styles["page-loader"] : ""
      }`} data-testid="loader-wrapper"
    >
      <div className={styles.loader} />
    </div>
  );
};

export default Loader;
