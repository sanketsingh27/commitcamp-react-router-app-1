import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Course() {
  const courseArr = [
    {
      name: "javascript",
      id: 1,
    },
    {
      name: "html",
      id: 2,
    },
    {
      name: "react",
      id: 3,
    },
    {
      name: "DOM",
      id: 4,
    },
  ];

  return (
    <>
      <div>Course</div>
      {courseArr.map((course) => {
        const { name, id } = course;
        return (
          <Link to={`${name}`}>
            <div
              style={{
                margin: "50px 0",
                padding: "10px 30px",
                border: "2px solid blue ",
              }}
              key={id}
            >
              <h3>{name}</h3>
            </div>
          </Link>
        );
      })}
      <Outlet />
    </>
  );
}
