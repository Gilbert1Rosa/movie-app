import { thunkBuilder } from '../helper/ReduxHelper';
import { setMovies, setSearchCriteria } from './Action';
import * as MovieAPI from '../api/MovieAPI';

export const movieListThunk = thunkBuilder((value, dispatch, getState) => {
    return MovieAPI.getDefaultMovies(movies => dispatch(setMovies(movies)));
});

export const movieSearchThunk = thunkBuilder((value, dispatch, getState) => {
    return MovieAPI.searchMovies(value, movies => {
        dispatch(setSearchCriteria(value));
        dispatch(setMovies(movies));
    });
})