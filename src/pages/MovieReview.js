import React from 'react';
import props from '../movies.json'
import "../styles.css"

function MovieReview() {
    return (
        <div>
            {
                props.map( movie => {
                    return (
                        <div class="movie-slides">
                            <p><b>Movie Name:</b> {movie.name}</p>
                            <img src={movie.image} width="420" height="100"alt={movie.name} />
                            <p><b>Movie Raiting:</b> {movie.rating}</p>
                            <p><b>Actors: </b> {movie.actors}</p>
                            <br></br>
                        </div>
                    )
            })
            }
        </div>
    );
}


export default MovieReview

/*export default function MovieReview() {
    return <h1>Movie Review Page</h1>
}*/