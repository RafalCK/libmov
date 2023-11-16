import API from "../services/API";
import env from "../env";
const resource = "/person";

export default {
  getPopular(page) {
    return API().get(`${resource}/popular${env.APIKey}&page=${page}`);
  },
  getPersonById(id) {
    return API().get(`${resource}/${id}${env.APIKey}`);
  },
  getMoviesByPersonId(id) {
    return API().get(`${resource}/${id}/movie_credits${env.APIKey}`);
  },
  getSeriesByPersonId(id) {
    return API().get(`${resource}/${id}/tv_credits${env.APIKey}`);
  },
  getSocialsByPersonId(id) {
    return API().get(`${resource}/${id}/external_ids${env.APIKey}`);
  },
};
