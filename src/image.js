// src/Image.js
import React from "react";

const Image = ({ image }) => {
  return (
    <div>
      <img src={image} alt="Image du produit" style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default Image;
