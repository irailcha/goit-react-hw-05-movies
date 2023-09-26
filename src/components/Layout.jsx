import { StyleHeader } from "../App.styled";
import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <StyleHeader>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </StyleHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
