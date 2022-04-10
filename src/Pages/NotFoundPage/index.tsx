import React from "react";
import styles from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles["not-found-page"]}>
      <h1>Page not found!</h1>
      <br />
      <Link to="/" className={styles["link"]}>
        Go to Home
      </Link>
    </div>
  );
};
export default NotFoundPage;
