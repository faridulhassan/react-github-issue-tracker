import { createSlice } from "@reduxjs/toolkit";
import { ApiParams, IssueState } from "../../types";
import { AppDispatch } from "../index";

export const initialState: IssueState = {
  issues: [],
  apiParams: {
    total_count: 0,
    total_opened_count: 0,
    errorMessage: "",
    loading: false,
    issueType: "open",
    page: 1,
    perPage: 20,
    ownerName: "",
    repoName: "",
  },
};

const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    getIssues: (state) => {
      state.apiParams.errorMessage = "";
      state.apiParams.loading = true;
    },
    getIssuesSuccess: (state, { payload }) => {
      state.issues = payload.items;
      if (state.apiParams.issueType === "open") {
        state.apiParams.total_opened_count = payload.total_count;
      }
      state.apiParams.total_count = payload.total_count;
      state.apiParams.loading = false;
      state.apiParams.errorMessage = "";
    },
    getIssuesFailure: (state, { payload }) => {
      state.issues = [];
      state.apiParams.loading = false;
      state.apiParams.total_count = 0;
      state.apiParams.total_opened_count = 0;
      state.apiParams.errorMessage = payload;
    },
    setApiParams: (state, { payload }) => {
      state.apiParams = { ...state.apiParams, ...payload };
    },
    resetState: (state) => {
      state.issues = initialState.issues;
      state.apiParams = initialState.apiParams;
    },
  },
});

export const {
  getIssues,
  getIssuesSuccess,
  getIssuesFailure,
  setApiParams,
  resetState,
} = issuesSlice.actions;

export function fetchIssues(params: ApiParams) {
  return async (dispatch: AppDispatch) => {
    dispatch(getIssues());

    try {
      const {
        ownerName,
        repoName,
        perPage = 20,
        page = 1,
        issueType = "open",
      } = params;
      const query = `q=repo:${ownerName}/${repoName} is:issue state:${issueType}&per_page=${perPage}&page=${page}`;
      const apiUrl = `https://api.github.com/search/issues?${query}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data?.errors?.[0]?.message || data.message;
        dispatch(getIssuesFailure(errorMessage));
        return;
      }
      dispatch(getIssuesSuccess(data));
    } catch (error) {
      dispatch(getIssuesFailure(error));
    }
  };
}

export default issuesSlice.reducer;
