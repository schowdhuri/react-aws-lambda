import { createBrowserHistory } from "history";
const isProd = process.env.NODE_ENV === "production";

export default createBrowserHistory({
  basename: isProd ? "/react-aws-lambda" : ""
});
