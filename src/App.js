import './App.css';
import "./styles.css"
import { Home }from './components/Home';
import { MovieReview } from './components/MovieReview';
import { Form } from './components/SubmitReview';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="MovieReview" element={<MovieReview />}></Route>
        <Route path="SubmitReview" element={<Form />}></Route>
      </Routes>
    </>
  );
}


export default App;
