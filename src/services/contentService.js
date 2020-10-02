import * as constants from '../constants/contentServiceConstant';

const getContentFromServer = () =>
  fetch(constants.CONTENT_API_URL).then(data => data.json());

export const getSeries = () =>
  new Promise((resolve, reject) => {
    getContentFromServer()
      .then(data => {
        const series = data.entries
          .filter(
            f =>
              f.programType === constants.CONTENT_PROGRAM_TYPE_SERIES &&
              f.releaseYear >= constants.CONTENT_MIN_RELEASE_YEAR
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, constants.CONTENT_MAX_DISPLAY_COUNT);
        resolve(series);
      })
      .catch(reject);
  });

export const getMovies = () =>
  new Promise((resolve, reject) => {
    getContentFromServer()
      .then(data => {
        const movies = data.entries
          .filter(
            f =>
              f.programType === constants.CONTENT_PROGRAM_TYPE_MOVIES &&
              f.releaseYear >= constants.CONTENT_MIN_RELEASE_YEAR
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, constants.CONTENT_MAX_DISPLAY_COUNT);
        resolve(movies);
      })
      .catch(reject);
  });
