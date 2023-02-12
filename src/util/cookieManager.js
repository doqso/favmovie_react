export const setCookie = (token) => {
  if (token) {
    document.cookie = `apiToken=${token};Path=/;`;
  } else
    document.cookie = `apiToken=;Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export const getCookie = () => {
  try {
    return document.cookie.split("apiToken=")[1].split(";")[0];
  } catch (e) {
    return null;
  }
}