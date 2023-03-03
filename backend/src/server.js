import express from 'express';
import {MongoClient } from 'mongodb';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express()
app.use(express.json());
const port = 8000
let movieData = [];



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.use(express.static(path.join(__dirname, '../posters')));

app.use(express.static(path.join(__dirname, '../build')));


app.use(express.urlencoded({ extended: false }));


//Hold the multer upload to upload the photos inputted into the form.
const upload = multer({ dest: 'posters/' })


// Grabbing the movies from the database and displaying
app.get('/api/movies', async (req, res) => {
  //Client of the MongoDB
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    
    //Connect to the client
    await client.connect();

    //This is the database.
    const db = client.db('movie-data');

    //This is the movie data from the database.
    movieData = await db.collection('movies').find({}).toArray();

    //Return a JSon object of the movie data.
    res.json(movieData);
})


// Removing a movie from the database
app.post('/api/removeMovie', async (req, res) => {
  //Client of the MongoDB
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  
  //Connect to the client
  await client.connect();

  //This is the database.
  const db = client.db('movie-data');

  //We look for the title that we want to delete, and delete it.
  const result = await db.collection('movies').deleteOne({ title: req.body.title})
 
  //Send a status of 200 to the client.
  res.sendStatus(200);
})


// Submitting a movie to the database.
app.post("/api/SubmitReview", upload.single('image'), async (req, res) => {
  //Client of the MongoDB
	const client = new MongoClient("mongodb://127.0.0.1:27017");

  //Connect to the client
	await client.connect();

  //This is the database.
	const db = client.db("movie-data");

  //Create a movie object as we have multiple things to send to the database.
	const movieObj = {
		name: req.body.name,
		release_date: req.body.release_date,
		actors: req.body.actors,
		image: req.file.filename,
		rating: req.body.rating,
	};
  
  // Insert the new movie into the movie databse.
	const newMovie = await db.collection("movies").insertOne(movieObj);

  //Redirect the user to MovieReview page.
	res.redirect("/MovieReview");
});


//Displaying the movies
app.get('/movies', async (req, res) => {
  //Client of the MongoDB
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  //Connect to the client
	await client.connect();

  //This is the database.
	const db = client.db("movie-data");

  //This is all the movie data.
	movieData = await db.collection("movies").find({}).toArray();

	res.json(movieData);
});


//Listening on the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
