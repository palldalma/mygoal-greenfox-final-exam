export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";

export const showLoadingSign = (url: string) => ({
  type: "SHOW_LOADING",
  payload: url,
});

export const hideLoadingSign = (url: string) => ({
  type: "HIDE_LOADING",
  payload: url,
});
