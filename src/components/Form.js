import React, { useState } from "react";
import Button from "./Button";

const Form = ({ onSubmit }) => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.trim()) {
      onSubmit(inputData);
      setInputData("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md">
      <input
        type="text"
        placeholder="Enter something..."
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default Form;
