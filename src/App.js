// import logo from './logo.svg';
import React from "react";
import Row from "./Row";
import './App.css';
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title= "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title = "Trending Now" fetchUrl={requests.fetchTrendingMovie}/>
      <Row title = "Action" fetchUrl={requests.fetchAction}/>
      <Row title = "Comedy" fetchUrl={requests.fetchComedy}/>
      <Row title = "Crime" fetchUrl={requests.fetchCrime}/>
      <Row title = "Horror" fetchUrl={requests.fetchHorror}/>
      <Row title = "Romance" fetchUrl={requests.fetchRomance}/>
    </div>
  );
}

export default App;
