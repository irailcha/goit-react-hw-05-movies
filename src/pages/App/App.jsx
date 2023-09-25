import React, { Suspense, lazy } from 'react';
import './App.styled';
import { StyleHeader} from './App.styled';
import { Routes, Route, Link } from "react-router-dom";
const Home = lazy(() => import("../Home/Home"));
const Movies = lazy(() => import("../Movies/Movies"));
const MovieDetails = lazy(() => import("../MovieDetails/MovieDetails"));
const GlobalStyle = lazy(() => import("../../GlobalStyle"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));





export const App = () => {

  return (

      <div>
        <StyleHeader>
          <Link to="/home">Home</Link>
          <Link to="/movies">Movies</Link>
        </StyleHeader>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route index element={<Cast />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        </Routes>
      </Suspense>
        <GlobalStyle/>
      </div>

  );
};





