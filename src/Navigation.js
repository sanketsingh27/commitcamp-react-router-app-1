import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const linkArr = ["home", "users", "category", "product"];

  const linkStyle = {
    display: "inlineBlock",
    margin: "10px 30px",
    padding: "10px 30px",
    border: "2px solid blue ",
  };

  return (
    <>
      {linkArr.map((link, index) => (
        <Link style={linkStyle} key={index} to={`/${link}`}>
          {link}
        </Link>
      ))}
    </>
  );
}
