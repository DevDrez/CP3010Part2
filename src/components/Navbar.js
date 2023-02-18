import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/MovieReview">Review Movies</Link>
            <Link to="/SubmitReview">Submit Review</Link>
        </nav>
    )
}