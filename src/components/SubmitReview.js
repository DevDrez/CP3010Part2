const data = require("../movies.json");

export const Form = () => {
  return (
    
    <form id="form" className="submitMovie">
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
      <button type="button" onClick={onSubmit}>Submit</button>
    </form>
  );
}

export function onSubmit(){
  console.log("onSubmit")
  let name = document.getElementById("name").value;
  let url = document.getElementById("url").value;
  let raiting = document.getElementById("raiting").value;
  let actors = document.getElementById("actors").value;
  let releaseDate = document.getElementById("releaseDate").value;
  pushData(name, url, raiting, actors, releaseDate);
  console.log(data);
}

export function pushData(name, url, raiting, actors, releaseDate){
  data.push({name: name, releaseDate: releaseDate, actors: actors, image: url, rating: raiting});
}

console.log(data);