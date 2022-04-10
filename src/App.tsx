import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

/*Store*/
import { RootState } from "./store";

/*Components*/
import Container from "./components/Container";
import Toast from "./components/Toast";

function App(): JSX.Element {
  const errorMessage = useSelector(
    (state: RootState) => state.issuesReducer.apiParams.errorMessage
  );
  return (
    <div className="App">
      <Container>
        <Outlet />
        <Toast show={!!errorMessage} message={errorMessage} />
      </Container>
    </div>
  );
}

export default App;
