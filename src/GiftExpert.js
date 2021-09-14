import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGifts } from "./components/GridGifts";

export const GiftExpert = () => {
  const [categories, setCategories] = useState([""]);

  const AddCategor = () => setCategories([...categories, "Inu Yasha"]);
  return (
    <div>
      <h2>GiftExpert</h2>
      <hr />
      <button onClick={AddCategor}>Buscar</button>
      <AddCategory setCategories={setCategories} />

      {categories.map((category) => {
        return <GridGifts key={category} category={category} />;
      })}
    </div>
  );
};
