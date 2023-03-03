import "../styles.css"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Container>
            <Row>
                {
                    data.map( data => (
                        <Col sm={4} className='mb-6'>
                            <Card>
                                <Card.Img className="img-responsive img-thumbnail" variant="top" src={data.image}/>
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>{data.release_date}</Card.Text>
                                        <Card.Text>{displayThumbs(data.rating)}</Card.Text>
                                        <Card.Text className='actors'>{data.actors}</Card.Text>
                                        <Button onClick={() => handleRemoveRow(data.name)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        
                    }
            </Row>
        </Container>
    );
}