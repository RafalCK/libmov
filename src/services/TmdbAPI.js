import API from "./API";
import env from "../env";

export default {
  getList() {
    return API().get(`/discover/movie${env.APIKey}`);
  },
  getLatest() {
    return API().get(`/movie/latest${env.APIKey}`);
  },
  getPopular() {
    return API().get(`/movie/popular${env.APIKey}`);
  },
  getNowPlaying() {
    return API().get(`/movie/now_playing${env.APIKey}`);
  },
  getTopRated() {
    return API().get(`/movie/top_rated${env.APIKey}`);
  },
  getUpcoming() {
    return API().get(`/movie/upcoming${env.APIKey}`);
  },
  getGenres() {
    return API().get(`/genre/movie/list${env.APIKey}`);
  },
  getAiringToday() {
    return API().get(`/tv/airing_today${env.APIKey}`);
  },
  getOnTheAir() {
    return API().get(`/tv/on_the_air${env.APIKey}`);
  },
  getTvPopular() {
    return API().get(`/tv/popular${env.APIKey}`);
  },
  getTvTopRated() {
    return API().get(`/tv/top_rated${env.APIKey}`);
  },
};
