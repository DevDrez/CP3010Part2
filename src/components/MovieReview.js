import React from 'react';
import "../styles.css"

const props = require("../movies.json")

export const MovieReview = () => {
    return (
        <div>
            {
                props.map( movie => {
                    return (
                        <div className="movie-slides">
                            <p><b>Movie Name:</b> {movie.name}</p>
                            <img src={movie.image} width="420" height="100"alt={movie.name} />
                            <p><b>Movie Raiting:</b> {movie.rating}</p>
                            <p><b>Actors: </b> {movie.actors}</p>
                            <p><b>Release Date: </b> {movie.releaseDate}</p>
                            <br></br>
                        </div>
                    )
            })
            }
        </div>
    );
}