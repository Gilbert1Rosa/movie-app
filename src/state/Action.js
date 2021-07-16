export const setMovies = movies => {
    return {
        type: 'SET_MOVIES',
        payload: movies
    }
}

export const setSearchCriteria = searchCriteria => {
    return {
        type: 'SEARCH_MOVIES',
        payload: searchCriteria
    }
}