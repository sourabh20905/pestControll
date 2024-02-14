import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className=" w-1/2">
        <img
          src={item.Eimage}
          alt="image"
          className="w-full h-full object-cover"
        />
        <h1>{item.name}</h1>
      </div>
    </>
  );
};

export default Card;
