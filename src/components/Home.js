import React from "react";
import CardItem from "./CardItem";
import "../css/Home.css";

const Home = () => (
  <div className="home">
    <h2 className="home-title">Popular Titles</h2>
    <div className="card-container">
      <CardItem title="SERIES" subtitle="Popular Series" to="/series" />
      <CardItem title="MOVIES" subtitle="Popular Movies" to="/movies" />
    </div>
  </div>
);

export default Home;
