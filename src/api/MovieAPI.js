const Common = require("../Common");

const getDefaultMovies = onMoviesFetched => {
    return fetch(Common.FEATURED_API)
        .then(res => res.json())
        .then(res => res.results)
        .then(fetchedMovies => {
            onMoviesFetched(fetchedMovies)
        });
};

const searchMovies = (searchCriteria, onMoviesFetched) => {
    return fetch(Common.SEARCH_API(searchCriteria))
        .then(res => res.json())
        .then(res => res.results)
        .then(fetchedMovies => {
            onMoviesFetched(fetchedMovies)
        });
};

module.exports = {
    getDefaultMovies,
    searchMovies
}