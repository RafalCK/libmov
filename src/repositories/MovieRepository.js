import API from "../services/API";
import env from "../env";
const resource = "/movie";

export default {
  getList() {
    return API().get(`/discover${resource}${env.APIKey}`);
  },
  getPopular() {
    return API().get(`${resource}/popular${env.APIKey}`);
  },
  getNowPlaying() {
    return API().get(`${resource}/now_playing${env.APIKey}`);
  },
  getTopRated() {
    return API().get(`${resource}/top_rated${env.APIKey}`);
  },
  getUpcoming() {
    return API().get(`${resource}/upcoming${env.APIKey}`);
  },
};
