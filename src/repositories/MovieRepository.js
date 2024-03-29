import API from "../services/API";
import env from "../env";
const resource = "/movie";

export default {
  getList(page) {
    return API().get(`/discover${resource}${env.APIKey}&page=${page}`);
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
  getMovieById(id) {
    return API().get(`${resource}/${id}${env.APIKey}`);
  },
  getCreditsByMovieId(id) {
    return API().get(`${resource}/${id}/credits${env.APIKey}`);
  },
  getSimilarByMovieId(id) {
    return API().get(`${resource}/${id}/similar${env.APIKey}`);
  },
};
