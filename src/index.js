import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navigation from "./Navigation";
import Course from "./Course";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route index element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="courses" element={<Course />} />
    </Routes>
  </BrowserRouter>
);
