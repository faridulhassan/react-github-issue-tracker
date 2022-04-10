/*Api*/
export interface ApiParams {
  ownerName: string;
  repoName: string;
  perPage?: number;
  page?: number;
  issueType?: "open" | "closed";
}

export interface ApiErrorMsg {
  documentation_url: string;
  message: string;
}

export enum issueTypesEnum {
  Open = "Open",
  Closed = "Closed",
}

/*Issue data type*/
interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: null | string;
}

interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: string;
  locked: boolean;
  assignee?: any;
  assignees: any[];
  milestone?: any;
  comments: number;
  created_at: Date | string;
  updated_at: Date | string;
  closed_at?: any;
  author_association: string;
  active_lock_reason?: any;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app?: any;
  score: number;
}

/*Action*/
export interface Action {
  type: string;
  payload?: any;
}

/*State*/
export interface IssueState {
  issues: any[];
  apiParams: {
    total_count: number;
    total_opened_count: number;
    errorMessage: string;
    loading: boolean;
    issueType: "open" | "closed";
    page: number;
    ownerName: string;
    repoName: string;
    perPage: number;
  };
}

export interface IssueParams {}
