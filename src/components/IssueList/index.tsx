import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

/*Styles*/
import styles from "./IssueList.module.css";

/*Components*/
import { CircleDotIcon } from "../Icons";
import Loader from "../Loader";
import IssueListItem from "./IssueListItem";

/*Types*/
import { Issue, issueTypesEnum } from "../../types";

/*Store*/
import { fetchIssues, setApiParams } from "../../store/features/issues";
import { RootState } from "../../store";

/*Constants*/
const issueTypes = [issueTypesEnum.Open, issueTypesEnum.Closed];

const IssueList: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    issues,
    apiParams: {
      loading,
      page,
      issueType,
      total_count,
      total_opened_count,
      ownerName,
      repoName,
      perPage,
    },
  } = useSelector((state: RootState) => state.issuesReducer);
  const [activeIssueType, setActiveIssueType] = useState(issueTypes[0]);

  const [pageCount, setPageCount] = useState(0);

  /*methods*/
  function onIssueTypeClick(item: string) {
    item = item.toLowerCase();
    if (item === issueType) {
      return;
    }
    dispatch(setApiParams({ page: 1, issueType: item, total_count: 0 }));
  }

  function onPageChange(selectedItem: { selected: number }) {
    dispatch(setApiParams({ page: selectedItem.selected + 1 }));
  }

  useEffect(() => {
    if (ownerName && repoName) {
      dispatch(fetchIssues({ ownerName, repoName, page, issueType }));
    }
  }, [issueType, page]);
  useEffect(() => {
    setPageCount(Math.ceil(total_count / perPage));
  }, [total_count]);

  return (
    <div className={styles["list-container"]}>
      <h1 className={styles["page-header"]}>
        Issues {<span className={styles["badge"]}>{total_opened_count}</span>}
      </h1>
      <div className={styles["list-table"]}>
        <header className={styles["list-container__header"]}>
          <nav>
            <ul>
              {issueTypes.map((item, index) => (
                <li
                  className={`${
                    activeIssueType === item ? styles["active"] : ""
                  }`}
                  key={index}
                  onClick={() => {
                    setActiveIssueType(item);
                    onIssueTypeClick(item);
                  }}
                >
                  <CircleDotIcon className={styles["header__icon"]} />
                  <span>
                    {item === issueTypesEnum.Open ? total_opened_count : ""}{" "}
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="list-container__body">
          {loading ? (
            <Loader />
          ) : (
            issues.map((issue: Issue) => (
              <IssueListItem key={issue.id} issue={issue} />
            ))
          )}
        </div>
      </div>
      <div className="list-container__footer">
        <div className={styles["pagination"]}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            pageRangeDisplayed={5}
            pageCount={pageCount}
            forcePage={page - 1}
            previousLabel="< Previous"
            previousClassName={styles["previous"]}
            nextClassName={styles["next"]}
            disabledClassName={styles["disabled"]}
            activeClassName={styles["selected"]}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default IssueList;
