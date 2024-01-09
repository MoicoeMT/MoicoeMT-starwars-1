import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home.jsx";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Details from "./views/Details.jsx";
import PlanetsDetails from "./views/PlanetsDetails.jsx";
import PeopleDetails from "./views/PeopleDetails.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Not found!</h1>} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/PlanetsDetails/:id" element={<PlanetsDetails />} />
          <Route path="/PeopleDetails/:id" element={<PeopleDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
