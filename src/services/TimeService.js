export default {
  convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes.toString().padStart(2, "0")}min`;
  },
  extractYearFromReleaseDate(releaseDate) {
    const date = new Date(releaseDate);
    return date.getFullYear();
  },
};
