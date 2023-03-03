import React from "react";
import {Card, Form, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export function FormBuilder({data, setData}) {

    return (
      <> 
      <center>
      <Card style = {{width:"30em", padding:"1em", background:"#93797A"}}>
        <Form method="post" action='/api/SubmitReview' encType="multipart/form-data">

          <Form.Group className='mb-4' controlId="name">
            <Form.Control name="name" type="text" placeholder="Movie Name"/>
          </Form.Group>

          <Form.Group className='mb-4' controlId="image">
            <Form.Control name="image" type="file"/>
          </Form.Group>

          <Form.Group className='mb-4' controlId="actors">
            <Form.Control name="actors" type="text" placeholder="Actor(s)"/>
          </Form.Group>

          <Form.Group className='mb-4' controlId="release_date">
            <Form.Control name="release_date" type="text" placeholder="Release Date"/>
          </Form.Group>

          <Form.Group className='mb-6'controlId="rating">
            <Form.Select name="rating" aria-label="Rating">
              <option>Select Thumbs!</option>
              <option value='1'>1 Thumb Up</option>
              <option value='2'>2 Thumbs Up</option>
              <option value='3'>3 Thumbs Up</option>
              <option value='4'>4 Thumbs Up</option>
              <option value='5'>5 Thumbs Up</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>

        </Form>
      </Card>
      </center>
      
      </>
    );}