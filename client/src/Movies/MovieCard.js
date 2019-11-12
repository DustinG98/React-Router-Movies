import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
      let currentMovie = props.movie;

      const saveMovie = () => {
        const addToSavedList = props.addToSavedList;
        addToSavedList(currentMovie)
      }


    return (
      <div>
        <Link to={`/movies/${props.thekey}`}>
        <div>
        <h2>{currentMovie.title}</h2>
        <div className="movie-director">
          Director: <em>{currentMovie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{currentMovie.metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {currentMovie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        </div>
        </Link>
        <div className="save-button" onClick={saveMovie} style={{zIndex:999}}>Save</div>
      </div>
    );
};

export default MovieCard;
