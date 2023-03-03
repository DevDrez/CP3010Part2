import './App.css';
import "./styles.css"
import { Home }from './components/Home';
import { MovieReview } from './components/MovieReview';
import { FormBuilder } from './components/SubmitReview';
import {Route, Routes } from 'react-router-dom';
import { NavBar } from './components/Navbar';
import { useState, useEffect } from 'react';


function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
		fetch("/api/movies")
			.then(response => response.json())
			.then(setData)
			.catch(error => console.log("This Error " + error));
	}, []);

	if (data == null) {
		return <h1>Please wait, as we are trying to load the movies :D</h1>;
  }
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="MovieReview" element={<MovieReview data={data} setData={setData}/>}></Route>
        <Route path="SubmitReview" element={<FormBuilder data={data} setData={setData}/>}></Route>
      </Routes>
    </>
  );
}


export default App;
