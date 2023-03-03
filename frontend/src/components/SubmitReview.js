import React, { useState } from "react";
import {Card , Form, Button} from 'react-bootstrap';

export function FormBuilder({data, setData}) {
  
  /*const [movie, setMovie] = useState("");
  const [image, setImage] = useState("");
  const [raiting, setRaiting] = useState("");
  const [actor, setActor] = useState("");
  const [release_date, setRelease] = useState("");

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };
  const handlePhotoChange = (event) => {
    setImage(event.target.value);
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
  };*/


    return (
      <> 
      <center>
      <Card style = {{width:"50em", padding:"2em"}}>
        <Form method="post" action='/api/SubmitReview' enctype="multipart/form-data">

          <Form.Group controlId="name">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" placeholder="Movie Name"/>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control name="image" type="file"/>
          </Form.Group>

          <Form.Group controlId="actors">
            <Form.Label>Actors</Form.Label>
            <Form.Control type="text" placeholder="Movie Name"/>
          </Form.Group>

          <Form.Group controlId="release_date">
            <Form.Label>Release Date</Form.Label>
            <Form.Control type="text" placeholder="Movie Name"/>
          </Form.Group>

          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" placeholder="Movie Name"/>
          </Form.Group>

        </Form>
      </Card>
      </center>
      
      </>
    );}
    /*
    <form method="post" action='/api/SubmitReview' enctype="multipart/form-data" id="form" className="submitMovie">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Movie Name"
        onChange={handleMovieChange}
      />
      <input type="file" name="image" id="image" onChange={handlePhotoChange}/>
      <select name='rating' onChange={handleRaitingChange}>
          <option value=''></option>
          <option value='1'>1 Thumb Up</option>
          <option value='2'>2 Thumbs Up</option>
          <option value='3'>3 Thumbs Up</option>
          <option value='4'>4 Thumbs Up</option>
          <option value='5'>5 Thumbs Up</option>
        </select>
      <input 
        type="text"
        id="actors"
        name="actors"
        placeholder="Actors"
        onChange={handleActorChange}
      />

      <input 
        type="text"
        id="release_date"
        name="release_date"
        placeholder="Release Date"
        onChange={handleReleaseDateChange}
      />
      <input 
      type="submit" 
      value='Submit' 
      />
    </form>
  );
  */