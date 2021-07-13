export const FEATURED_API = "https://api.themoviedb.org/3/search/movie?api_key=62f61354742a71a2f3ff3a60e0747796&query=A";
export const IMG_API = (posterPath) => `https://image.tmdb.org/t/p/w500${posterPath}`;
export const SEARCH_API = (query) => `https://api.themoviedb.org/3/search/movie?api_key=62f61354742a71a2f3ff3a60e0747796&query=${query}`;