import './App.css';
import Navbar from './Navbar';
import "./styles.css"
import MovieReview from './pages/MovieReview';
import Form from './pages/SubmitReview';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieReview" element={<MovieReview />} />
        <Route path="/AddMovieReview" element={<Form />} />
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
