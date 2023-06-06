import axios from "axios";
import env from "../env";

export default (url = env.baseAPIUrl) => {
  return axios.create({
    baseURL: url,
  });
};
