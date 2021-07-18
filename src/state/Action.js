const ReduxHelper = require('../helper/ReduxHelper');

export const setMovies = ReduxHelper.actionBuilder('fetchMovies', 'payload');
export const setSearchCriteria = ReduxHelper.actionBuilder('searchMovies', 'payload');