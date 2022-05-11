import React from "react";
import { useParams } from "react-router-dom";

export default function Course() {
  const { subject } = useParams();
  return (
    <>
      <div>Course details </div>
      <h1>Subject name {subject}</h1>
    </>
  );
}
