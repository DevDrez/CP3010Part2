import "../styles.css"

export let MovieReview = ({data, setData}) => {
    const handleRemoveRow = async (id) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/xxx-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("id", id);
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        try {
            const response = await fetch("/api/removeMovie", requestOptions);
            if ( response.status == 200 ) {
                setData( data.filter( movie => movie.id !== id ) );
            }
        } catch (error) {
            console.log(error);
        }
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