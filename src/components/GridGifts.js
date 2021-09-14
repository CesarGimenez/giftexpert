import React, { useState, useEffect } from "react";
import { GridGiftItem } from "./GridGiftItem";

export const GridGifts = ({ category }) => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    getGifts();
  }, [category]);

  const getGifts = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=12&q=${encodeURI(
      category
    )}&api_key=MEJ84Jj9Iv4IYI8V4V5Aj6WmUeN9ai9X`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  return (
    <div className="animate__animated animate__fadeInDown">
      <h3>{category}</h3>
      <div className="card-grid">
        {Images.map((img) => {
          return <GridGiftItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};
