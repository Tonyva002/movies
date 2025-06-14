import React from "react";
import {Routes, Route} from 'react-router-dom'
import Movies from "../components/Movies";
import Home from "../components/Home";
import Series from "../components/Series"

function Router() {
  return (
    <div>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
    </Routes>
    </div>
  );
}

export default Router
