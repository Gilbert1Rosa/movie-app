const initialMovieState = {
    movies: []
}

const initialSearchState = {
    searchCriteria: ''
}

export const movieReducer = (state = initialMovieState, action) => {
    const movies = action.payload ? action.payload : [];
    return {
        movies: [...movies]
    }
}

export const searchReducer = (state = initialSearchState, action) => {
    return {
        ...state,
        searchCriteria: action.payload
    }
}