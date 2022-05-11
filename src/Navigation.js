import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const linkArr = ["home", "courses"];

  const linkStyle = {
    display: "inlineBlock",
    margin: "10px 30px",
    padding: "10px 30px",
    border: "2px solid blue ",
  };

  return (
    <div>
      {linkArr.map((link, index) => (
        <Link style={linkStyle} key={index} to={`/${link}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
