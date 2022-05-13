import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [newName, setNewName] = useState();

  const name = searchParams.get("name");

  return (
    <>
      <h1>Products</h1>
      <h3>the name is {name}</h3>

      <input
        value={newName}
        placeholder="enter new name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={() => setSearchParams({ ...searchParams, name: newName })}>
        Set new Name
      </button>
    </>
  );
}
