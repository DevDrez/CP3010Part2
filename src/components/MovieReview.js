import React, { useState } from 'react';
import "../styles.css"

const movie = require("../movies.json")

export const MovieReview = () => {

    const [data, setData] = useState(movie);
    
    const handleRemoveRow = (id) => {
        const newData = data.filter(movie => movie.id !== id);
        setData(newData);
      }

    return (
        <div>
            {
                movie.map( movie => {
                    return (
                        <div className="movie-slides">
                            <p><b>Movie Name:</b> {movie.name}</p>
                            <img src={movie.image} alt={movie.name} />
                            <p><b>Movie Raiting:</b> {movie.rating}</p>
                            <p><b>Actors: </b> {movie.actors}</p>
                            <p><b>Release Date: </b> {movie.releaseDate}</p>
                            <button onClick={() => handleRemoveRow(movie.id)}>Delete</button>
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
    );
}