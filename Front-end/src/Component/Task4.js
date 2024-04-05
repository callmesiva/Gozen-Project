import React, { useState } from "react";

const Task4 = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (num.length !== 10) {
      setError("Phone number must be 10 digits.");
    } else {
      setError("");
      alert(`${name}, ${num}, ${mail}`);
    }
  };

  return (
    <>
      <h4 className="mt-10 text-center">Forms and Controlled Components</h4>

      <div className="flex justify-center mt-5">
        <form
          className="border-2 flex flex-col w-80 py-5 items-center rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 m-2 w-60 shadow border rounded"
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-2 m-2 w-60 shadow border rounded"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Phone Number"
            value={num}
            title="Phone number must be 10 digits"
            required
            onChange={(e) => setNum(e.target.value)}
          />
          <input
            className="p-2 m-2 w-60 shadow border rounded"
            type="email"
            placeholder="Email"
            value={mail}
            required
            onChange={(e) => setMail(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-16 h-8 bg-blue-500 text-white rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Task4;
