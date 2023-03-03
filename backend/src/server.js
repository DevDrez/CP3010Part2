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


app.use(express.urlencoded({ extended: false }));


const upload = multer({ dest: 'posters/' })



// Grabbing the movies from the database and displaying
app.get('/api/movies', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-data');

    movieData = await db.collection('movies').find({}).toArray();
    console.log(movieData);
    res.json(movieData);
})


// Removing a movie from the database
app.post('/api/removeMovie', async (req, res) => {
  console.log(req.body.title);
  
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  await client.connect();

  const db = client.db('movie-data');
  const result = await db.collection('movies').deleteOne({ title: req.body.title})
 
  res.sendStatus(200);
})


// Submitting a movie to the database.
app.post("/api/SubmitReview", upload.single('image'), async (req, res) => {
	const client = new MongoClient("mongodb://127.0.0.1:27017");
	await client.connect();

	const db = client.db("movie-data");

	const movieObj = {
    id:movieData.length + 1,
		name: req.body.name,
		release_date: req.body.release_date,
		actors: req.body.actors,
		image: req.file.filename,
		rating: req.body.rating,
	};
	const newMovie = await db.collection("movies").insertOne(movieObj);

	res.redirect("/MovieReview");
});


app.get('/movies', async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
	await client.connect();

	const db = client.db("movie-data");
	movieData = await db.collection("movies").find({}).toArray();
	console.log(movieData);
	res.json(movieData);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
