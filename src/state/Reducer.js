const ReduxHelper = require('../helper/ReduxHelper');

const initialState = {
    movies: [],
    searchCriteria: ''
}

const reducers = {
    fetchMovies: (state, action) => {
        const movies = action.payload ? action.payload : [];
        return {
            ...state,
            movies: [...movies]
        }
    },
    searchMovies: (state, action) => {
        return {
            ...state,
            searchCriteria: action.payload
        }
    }
};

export const movieReducer = ReduxHelper.reducerBuilder(initialState, reducers);
export const searchReducer = ReduxHelper.reducerBuilder(initialState, reducers);