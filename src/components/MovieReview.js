import React, { useState } from 'react';
import "../styles.css"

//Hold the json movie list.
const movie = require("../movies.json")

export let MovieReview = () => {

    let [data, setData] = useState(movie);
    
    const handleRemoveRow = (id) => {
        let newData = data.filter(movie => movie.id !== id);
        setData(newData)
        /*As you can see in the console, it is removing the movie from the list,
        but it is not updating the page.*/
        console.log(newData)
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
                            <p><b>Release Date: </b> {movie.release_date}</p>
                            <button onClick={() => handleRemoveRow(movie.id)}>Delete</button>
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
    );
}