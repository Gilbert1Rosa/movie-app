import { IMG_API } from '../Common';

const setVoteClass = (vote) => {
    let color;
    if (vote >= 8) {
        color = 'green';
    } else if (vote >= 6) {
        color = 'orange';
    } else {
        color = 'red';
    }
    return color;
};

const Movie = (props) => {
    const movie = props.movie;
    return (
        <div className="movie">
            <img className="movie-poster" src={IMG_API(movie.poster_path)} alt={movie.title}/>
            <div className="movie-info secondary">
                <h3>{movie.title}</h3>
                <span className={`tag-${setVoteClass(movie.vote_average)} tertiary`}>{movie.vote_average}</span>
            </div>
            <div className="movie-overview">
                <h3>Overview: </h3>
                <span>{ movie.overview }</span>
            </div>
        </div>
    );
}

export default Movie;