import "../styles.css"

export let MovieReview = ({data, setData}) => {
    const handleRemoveRow = async (name) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/xxx-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", name);
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        try {
            const response = await fetch("/api/removeMovie", requestOptions);
            if ( response.status == 200 ) {
                setData( data.filter( movie => movie.name !== name ) );
            }
        } catch (error) {
            console.log(error);
        }
      }

      const displayThumbs = (rating) => {
        let stars = "";
        for (let i = 0; i < parseInt(rating); i++) {
            stars += "👍";
        }
        return stars;
    };

    return (
        <div>
            {
                data.map( data => {
                    return (
                        <div className="movie-slides">
                            <p><b>Movie Name:</b> {data.name}</p>
                            <img src={data.image} alt={data.name} />
                            <p><b>Movie Raiting:</b> {displayThumbs(data.rating)}</p>
                            <p><b>Actors: </b> {data.actors}</p>
                            <p><b>Release Date: </b> {data.release_date}</p>
                            <button onClick={() => handleRemoveRow(data.name)}>Delete</button>
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
    );
}