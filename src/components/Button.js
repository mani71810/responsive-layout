import React from "react";

const Button = ({ label, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out"
    >
      {label}
    </button>
  );
};

export default Button;
