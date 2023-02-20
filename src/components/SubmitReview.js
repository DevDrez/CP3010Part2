import React, { useState } from "react";
const data = require("../movies.json");

export function Form() {
  let countOfData = data.length;
  const [movie, setMovie] = useState("");
  const [photo, setPhoto] = useState("");
  const [raiting, setRaiting] = useState("");
  const [actor, setActor] = useState("");
  const [release_date, setRelease] = useState("");

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };
  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };
  const handleRaitingChange = (event) => {
    setRaiting(event.target.value);
  };
  const handleActorChange = (event) => {
    setActor(event.target.value);
  };
  const handleReleaseDateChange = (event) => {
    setRelease(event.target.value);
    console.log(setRelease(event.target.value))
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    data.push({name: movie, release_date:release_date, actors: actor, image:photo , rating:raiting });
  };


    return (
      <form id="form" className="submitMovie" onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input type="text" name="name" onChange={handleMovieChange}/>
        </label>
        <br />
        <br />
        <label>
          Photo URL:
          <input id="url" type="text" name="photo" onChange={handlePhotoChange}/>
        </label>
        <br />
        <br />
        <label>
          Movie Raiting:
          <input id="raiting" type="number" name="raiting" onChange={handleRaitingChange}/>
        </label>
        <br />
        <br />
        <label>
          Actors:
          <input id="actors" type="text" name="actor" onChange={handleActorChange}/>
        </label>
        <br />
        <br />
        <label>
          Release Date:
          <input id="release_date" type="text" name="release_date" onChange={handleReleaseDateChange}/>
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
}