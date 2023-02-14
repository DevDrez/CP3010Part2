export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Assignment Home Page</a>
            <ul>
                <li className="active">
                    <a href="/MovieReview">Movie Reviews</a>
                </li>
                <li>
                    <a href="/AddMovieReview">Add Movie Review</a>
                </li>
            </ul>

        </nav>
    )
}