import React from "react";
import { useState, useEffect } from "react";

export default function Category() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((jsonValue) => setCategories(jsonValue));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const allCategories = categories.map((category, idx) => {
    return <h3 key={idx}>{category}</h3>;
  });

  return (
    <>
      <h1>All Categories</h1>
      {allCategories.length === 0 ? <h1>Loading</h1> : allCategories}
    </>
  );
}
