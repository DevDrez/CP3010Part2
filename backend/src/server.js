import express from 'express';
import fs from 'fs';
import {MongoClient } from 'mongodb';
import multer from 'multer';



const app = express()
const port = 8000



const upload = multer({ dest: 'posters/' });

const movieData = JSON.parse(fs.readFileSync('../frontend/public/movies.json'));
console.log(movieData);


/*let movieData = [
    {"title":"Terminator 2"},
    {"title":"Rocky IV"},
    {"title":"Titanic"},
    {"title":"Die Hard"}
];*/

app.get('/api/movies', async (req, res) => {
    
    //res.json(movieData)
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-data');

    const movieData = await db.collection('movies').find({}).toArray();
    console.log(movieData);
    res.json(movieData);

})

app.post('/api/SubmitReview', async (req,res) => {
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  await client.connect();

  const db = client.db('movie-data');


  const insertOperation = await db.collection('movies').insertOne( {'name':req.body.name}, {'photo':req.body.photo},
  {'raiting':req.body.raiting}, {'actor':req.body.actor}, {'release_date':req.body.release_date});
  console.log(insertOperation);
  res.redirect('/');

    /*movieData.push( { "title":req.body.title })
    saveData();
    console.log("update movies called");
    console.log(req.body);
    res.redirect('/');*/
})

app.get('/movies/', (req, res) => {
    res.json(movieData);
});


const saveData = () => {
  const jsonContent = JSON.stringify(movieData);
  fs.writeFile("./movies.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
    }
    console.log("JSON file has been saved.");
  });
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
