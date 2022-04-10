import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

/*Styles*/
import "./index.css";

/*Components*/
import App from "./App";
import Header from "./components/Header";
import Loader from "./components/Loader";

/*Store*/
import { store } from "./store";

/*Pages*/
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const IssuesPage = React.lazy(() => import("./Pages/IssuesPage"));
const NotFoundPage = React.lazy(() => import("./Pages/NotFoundPage"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <React.Suspense fallback={<Loader isPageType={true} />}>
                  <HomePage />
                </React.Suspense>
              }
            />
            <Route
              path={"/issues"}
              element={
                <React.Suspense fallback={<Loader isPageType={true} />}>
                  <IssuesPage />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Loader isPageType={true} />}>
                  <NotFoundPage />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
