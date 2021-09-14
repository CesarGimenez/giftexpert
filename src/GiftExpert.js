import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGifts } from "./components/GridGifts";

export const GiftExpert = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <div>
      <h2>GiftExpert</h2>
      <hr />
      <AddCategory setCategories={setCategories} />

      {categories.map((category) => {
        return <GridGifts key={category} category={category} />;
      })}
    </div>
  );
};
