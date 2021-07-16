import React, { useEffect } from 'react';
import Movie from './components/Movie';
import './index.css';
import { connect } from 'react-redux';
import { movieListThunk, movieSearchThunk } from './state/Thunk';

function App(props) {
    const onSearch = (e) => {
        e.preventDefault();
        props.searchMovies(e.target.value);
    };
    const handleOnChange = (e) => {
        props.searchMovies(e.target.value);
    };

    useEffect(() => {
        props.fetchMovies();
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
                { props.movies.map(movie => <Movie key={movie.id} movie={movie}/>) }
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: () => dispatch(movieListThunk()),
        searchMovies: (searchCriteria) => {
            if (searchCriteria === '') {
                dispatch(movieListThunk());
            } else {
                dispatch(movieSearchThunk(searchCriteria));
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);