import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

/*Styles*/
import styles from "./IsssueFinderForm.module.css";

/*Components*/
import { CheckboxIcon } from "../Icons";

/*Utils*/
import { uuidv4 } from "../../utils";

/*Store*/
import { setApiParams } from "../../store/features/issues";

const IssueFinderForm: React.FC<{ onSubmit: Function }> = ({
  onSubmit,
}): JSX.Element => {
  const dispatch = useDispatch();

  const ownerNameId = useMemo(() => uuidv4(), []),
    repoNameId = useMemo(() => uuidv4(), []);

  const [isValidOwnerName, setIsValidOwnerName] = useState(false);
  const [isValidRepoName, setIsValidRepoName] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [ownerNameValue, setOwnerNameValue] = useState("");
  const [repoNameValue, setRepoNameValue] = useState("");

  /*methods*/
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const ownerName = ownerNameValue.trim(),
      repoName = repoNameValue.trim();
    setIsFormSubmitted(true);
    setIsValidOwnerName(!!ownerName.length);
    setIsValidRepoName(!!repoName.length);

    if (!ownerName.length || !repoName.length) {
      return;
    }
    dispatch(setApiParams({ ownerName, repoName, loading: true }));
    onSubmit();
  };
  const handleOwnerNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOwnerNameValue(event.target.value);
  };
  const handleRepoNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRepoNameValue(event.target.value);
  };

  useEffect(() => {
    isFormSubmitted && setIsValidOwnerName(!!ownerNameValue.trim().length);
  }, [ownerNameValue]);

  useEffect(() => {
    isFormSubmitted && setIsValidRepoName(!!repoNameValue.trim().length);
  }, [repoNameValue]);

  /*return*/
  return (
    <div className={styles["issue-finder-form-wrapper"]}>
      <form
        onSubmit={(event) => {
          handleFormSubmit(event);
        }}
        action="#"
        className={styles["issue-finder-form"]}
      >
        <div className={styles["row"]}>
          <div className={styles["col"]}>
            <div className={styles["input-field"]}>
              <label htmlFor={ownerNameId}>
                Owner <sup>*</sup>
              </label>
              <div
                className={`${styles["input-field-holder"]} ${
                  isFormSubmitted && !isValidOwnerName
                    ? styles["is-invalid"]
                    : ""
                }`}
              >
                <input
                  id={ownerNameId}
                  type="text"
                  placeholder="Owner name"
                  value={ownerNameValue}
                  onChange={handleOwnerNameChange}
                />
                {!!ownerNameValue.trim().length && (
                  <CheckboxIcon
                    color="#0DD9A8"
                    className={styles["success-icon"]}
                  />
                )}
                <div className={styles["tooltip"]}>This field is required</div>
              </div>
            </div>
          </div>

          <div className={styles["col"]}>
            <div className={styles["input-field"]}>
              <label htmlFor={repoNameId}>
                Repository <sup>*</sup>
              </label>
              <div
                className={`${styles["input-field-holder"]} ${
                  isFormSubmitted && !isValidRepoName
                    ? styles["is-invalid"]
                    : ""
                }`}
              >
                <input
                  id={repoNameId}
                  type="text"
                  placeholder="Repository name"
                  value={repoNameValue}
                  onChange={handleRepoNameChange}
                />
                {!!repoNameValue.trim().length && (
                  <CheckboxIcon
                    color="#0DD9A8"
                    className={styles["success-icon"]}
                  />
                )}
                <div className={styles["tooltip"]}>This field is required</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["row"]}>
          <div className={`${styles["col"]} d-flex justify-center`}>
            <button type="submit">Show issues</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default IssueFinderForm;
