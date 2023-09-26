import React, { lazy} from 'react';
import './App.styled';
import { Routes, Route, Navigate } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const GlobalStyle = lazy(() => import("./GlobalStyle"));
const Cast = lazy(() => import("./pages/Cast/Cast"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));

export const App = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <GlobalStyle/>
      
    </>
  );
};





