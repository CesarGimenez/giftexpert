import React from "react";

export const GridGiftItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
