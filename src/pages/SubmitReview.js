/*import props from '../movies.json'

export default function MovieReview() {
    return (
    <div class='submitMovie'>
        <h2>Please submit a movie for review</h2>
        <form>
            <label for='name'>Movie Name: </label>
            <input type="text" id="name" name="name"></input><br></br><br></br>
            <label for='releaseDate'>Release Date: </label>
            <input type="text" id="releaseDate" name="releaseDate"></input><br></br><br></br>
            <label for='actors'>Actors: </label>
            <input type="text" id="actors" name="actors"></input><br></br><br></br>
            <label for='img'>Image: </label>
            <input type="text" id="img" name="img"></input><br></br><br></br>
            <label for='raiting'>Raiting: </label>
            <input type="number" id="raiting" name="raiting"></input><br></br><br></br>
            <label for='submit'></label>
            <input type="submit" id="submit" name="submit"></input><br></br><br></br>
        </form>
    </div>
    )
}

export function submitMovie(){
    const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            console.log("Scuffed")
        });
}*/ 
import React, { useState } from 'react';

const data = require("../movies.json");

export default function Form() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // send form data to server-side endpoint
    const fileUrl = './src/movies.json';
    fetch(fileUrl, {
      method: 'PUT',
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data saved successfully!');
        } else {
          console.error('Failed to save data!');
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // clear form data
    setFormData({});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <form id="form" onSubmit={handleSubmit} className="submitMovie">
      <label>
        Movie Name:
        <input type="text" name="name" />
      </label>
      <br />
      <br />
      <label>
        Photo URL:
        <input id="url" type="text" name="photo" />
      </label>
      <br />
      <br />
      <label>
        Movie Raiting:
        <input id="raiting" type="number" name="raiting" />
      </label>
      <br />
      <br />
      <label>
        Actors:
        <input id="actors" type="text" name="actor" />
      </label>
      <br />
      <br />
      <label>
        Release Date:
        <input id="releaseDate" type="text" name="releaseDate" />
      </label>
      <br />
      <br />
      <button type="submit" onSubmit={pushData}>Submit</button>
    </form>
  );
  function pushData(){
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    let raiting = document.getElementById("raiting").value;
    let actors = document.getElementById("actors").value;
    let releaseDate = document.getElementById("releaseDate").value;
    data.push({name: name, releaseDate: releaseDate, actors: actors, image: url, rating: raiting});
  }

}