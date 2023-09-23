import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import GlobalStyle from "GlobalStyle";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";
// import NotFound from "pages/NotFound";
import './App.styled';
import { StyleHeader} from './App.styled';




export const App = () => {

  return (

      <div>
        <StyleHeader>
          <Link to="/home">Home</Link>
          <Link to="/movies">Movies</Link>
        </StyleHeader>

        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route index element={<Cast />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          {/* // <Route path="*" element={<NotFound />} /> */} */
        </Routes>
        <GlobalStyle/>
      </div>

  );
};




