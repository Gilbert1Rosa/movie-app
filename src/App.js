import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { FEATURED_API, SEARCH_API } from './Common';
import './index.css';

function App() {
    const [ movies, setMovies ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState("");
    const onSearch = (e) => {
        e.preventDefault();
        getMovies(SEARCH_API(searchQuery));
        setSearchQuery('');
    };
    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const getMovies = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(res => res.results)
            .then(fetchedMovies => setMovies(fetchedMovies));
    };

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    return (
        <>
            <header>
                <div className="search-bar">
                    <form onSubmit={onSearch}>
                        <input className="search"
                               type="search"
                               placeholder="Buscar..."
                               onChange={handleOnChange}/>
                    </form>
                </div>
            </header>
            <div className="movie-container">
                { (movies ? movies : []).map(movie => <Movie key={movie.id} movie={movie}/>) }
            </div>
        </>
    );
}

export default App;