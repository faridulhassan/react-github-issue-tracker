import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/*Styles*/
import styles from "./Home.module.css";

/*Store*/
import { resetState } from "../../store/features/issues";
import { RootState } from "../../store";

/*Constants*/
import IssueFinderForm from "../../components/IssueFinderForm";
import Loader from "../../components/Loader";

const HomePage: React.FC = (): JSX.Element => {
  const {
    apiParams: { loading },
  } = useSelector((state: RootState) => state.issuesReducer);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, []);

  function onFormSubmit() {
    navigate("/issues");
  }

  return (
    <div>
      {loading && <Loader isPageType={true} />}
      <div className={styles["content"]}>
        <IssueFinderForm onSubmit={onFormSubmit} />
      </div>
    </div>
  );
};
export default HomePage;
