import React from "react";
import moment from "moment";

/*Styles*/
import styles from "./IssueList.module.css";

/*Types*/
import { Issue } from "../../types";

/*Components*/
import { ChatIcon, CircleCheckIcon, CircleDotIcon } from "../Icons";

const IssueListItem: React.FC<{ issue: Issue }> = ({ issue }): JSX.Element => {
  const {
    title,
    html_url,
    number,
    comments,
    state,
    created_at,
    user: { login },
  } = issue;
  return (
    <div className={styles["list-item"]}>
      <div className={styles["list-item__inner-content"]}>
        <div className={styles["list-item__left"]}>
          <span className={styles["list-item-status-icon"]}>
            {state === "closed" ? (
              <CircleCheckIcon />
            ) : (
              <CircleDotIcon color="#0DD9A8" />
            )}
          </span>
          <a
            href={html_url}
            className={styles["title"]}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
          <div className={styles["short-desc"]}>
            #{number} {state === "open" ? "opened " : "closed "}
            {moment(created_at).fromNow()} by {login}
          </div>
        </div>
        <div className={styles["list-item__right"]}>
          {!!comments && (
            <a href={html_url} target="_blank" rel="noreferrer">
              <ChatIcon className={styles["comment_icon"]} />
              <span className={styles["comment-counter"]}>{comments}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default React.memo(IssueListItem);
