import express from 'express';
import {MongoClient } from 'mongodb';
import multer from 'multer';


const app = express()
app.use(express.json());
const port = 8000

app.use(express.urlencoded({ extended: false }));

const upload = multer({ dest: 'posters/' })

app.get('/api/movies', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-data');

    const movieData = await db.collection('movies').find({}).toArray();
    console.log(movieData);
    res.json(movieData);
})

app.post('/api/removeMovie', async (req, res) => {
  console.log(req.body.title);
  
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  await client.connect();

  const db = client.db('movie-data');
  const result = await db.collection('movies').deleteOne({ title: req.body.title})
 
  res.sendStatus(200);
})

app.post("/api/SubmitReview", async (req, res) => {
	const client = new MongoClient("mongodb://127.0.0.1:27017");
	await client.connect();

	const db = client.db("movie-data");

	const movieObj = {
    id: req.body.id,
		name: req.body.name,
		release_date: req.body.release_date,
		actors: req.body.actors,
		image: req.body.image,
		rating: req.body.rating,
	};
	console.log(req.body);
	res.send(req.body);

	const newMovie = await db.collection("movies").insertOne(movieObj);

	console.log(newMovie);
	res.redirect("/MovieReview");
});


app.get('/movies', (req, res) => {
    res.json(movieData);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
