import { FEATURED_API, SEARCH_API } from '../Common';
import { setMovies } from './Action';

const getMovies = (url, setMovies) => {
    return fetch(url)
        .then(res => res.json())
        .then(res => res.results)
        .then(fetchedMovies => {
            setMovies(fetchedMovies)
        });
};

export const movieListThunk = () => {
    return dispatch => {
        return getMovies(FEATURED_API, movies => dispatch(setMovies(movies)));
    }
}

export const movieSearchThunk = searchCriteria => {
    return dispatch => {
        return getMovies(SEARCH_API(searchCriteria), movies => dispatch(setMovies(movies)));
    }
}