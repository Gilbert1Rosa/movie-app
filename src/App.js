import React, { useEffect } from 'react';
import Movie from './components/Movie';
import './index.css';
import { connect } from 'react-redux';
import { movieListThunk, movieSearchThunk } from './state/Thunk';
import Header from './components/Header';
import movieStore from './state/Store';

function App(props) {
    const { searchMovies, fetchMovies } = props;
    const onSearch = (e) => {
        e.preventDefault();
        searchMovies(e.target.value);
    };
    const handleOnChange = (e) => {
        searchMovies(e.target.value);
    };

    useEffect(() => {
        fetchMovies();
        console.log(movieStore.getState());
    }, [fetchMovies]);

    return (
        <>
            <Header onSearch={onSearch} handleOnChange={handleOnChange}/>
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