import React from 'react';
import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link key={movie.id} to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></Link>
    ))}
    <Link to="/"><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
