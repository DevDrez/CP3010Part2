import "../styles.css"

export let MovieReview = ({data, setData}) => {
    const handleRemoveRow = (id) => {
        let newData = data.filter(movie => movie.id !== id);
        setData(newData)
        console.log(newData)
      }

    return (
        <div>
            {
                data.map( data => {
                    return (
                        <div className="movie-slides">
                            <p><b>Movie Name:</b> {data.name}</p>
                            <img src={data.image} alt={data.name} />
                            <p><b>Movie Raiting:</b> {data.rating}</p>
                            <p><b>Actors: </b> {data.actors}</p>
                            <p><b>Release Date: </b> {data.release_date}</p>
                            <button onClick={() => handleRemoveRow(data.id)}>Delete</button>
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
    );
}