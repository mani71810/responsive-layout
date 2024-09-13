import React, { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [formData, setFormData] = useState([]);

  const addData = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Responsive Layout</h1>
      <Form onSubmit={addData} />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {formData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
