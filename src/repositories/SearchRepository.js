import API from "../services/API";
import env from "../env";
const resource = "/search";

export default {
  search(query) {
    return API().get(`${resource}/multi${env.APIKey}&query=${query}`);
  },
};
