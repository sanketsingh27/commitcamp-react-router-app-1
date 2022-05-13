import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Layout from "./Layout";
import Category from "./Category";
import Products from "./Products";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<App />} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Products />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

function NoMatch() {
  return <h1>Not a valid page</h1>;
}
