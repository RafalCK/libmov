import API from "../services/API";
import env from "../env";
const resource = "/tv";

export default {
  getList(page) {
    return API().get(`/discover${resource}${env.APIKey}&page=${page}`);
  },
  getPopular() {
    return API().get(`${resource}/popular${env.APIKey}`);
  },
  getTopRated() {
    return API().get(`${resource}/top_rated${env.APIKey}`);
  },
  getOnTheAir() {
    return API().get(`${resource}/on_the_air${env.APIKey}`);
  },
  getSerialById(id) {
    return API().get(`${resource}/${id}${env.APIKey}`);
  },
  getCreditsBySerialId(id) {
    return API().get(`${resource}/${id}/credits${env.APIKey}`);
  },
  getSimilarBySerialId(id) {
    return API().get(`${resource}/${id}/similar${env.APIKey}`);
  },
};
