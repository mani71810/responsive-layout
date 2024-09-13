import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <p className="text-gray-700">{data}</p>
    </div>
  );
};

export default Card;
