import API from "../services/API";
import env from "../env";
const resource = "/tv";

export default {
  getAiringToday() {
    return API().get(`${resource}/airing_today${env.APIKey}`);
  },
  getOnTheAir() {
    return API().get(`${resource}/on_the_air${env.APIKey}`);
  },
  getPopular() {
    return API().get(`${resource}/popular${env.APIKey}`);
  },
  getTopRated() {
    return API().get(`${resource}/top_rated${env.APIKey}`);
  },
};
