import './App.css';
import Navbar from './Navbar';
import "./styles.css"
import MovieReview from './pages/MovieReview';
import AddMovieReview from './pages/SubmitReview';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import props from './movies.json';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieReview" element={<MovieReview />} />
        <Route path="/AddMovieReview" element={<AddMovieReview />} />
      </Routes>
    </Router>
  );
}


/*function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/MovieReview":
      component = <MovieReview />;
      break;
    case "/AddMovieReview":
      component = <AddMovieReview />;
      break;
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}*/

export default App;