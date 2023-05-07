"use client"
import React, { useState } from "react";

const Box1 = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);

  const handleGenerate = () => {
    if (min === "" || max === "") {
      alert("Please enter a valid range.");
      return;
    }

    const minNum = parseInt(min, 10);
    const maxNum = parseInt(max, 10);

    if (minNum > maxNum) {
      alert("Minimum number should be smaller than the maximum number.");
      return;
    }

    setRandomNumber(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  };

  return (
    <div className="container mx-auto max-w-screen-md px-4 py-10">
      <div className="flex flex-col items-center border bg-slate-100">
        <div className="text-center mb-4 my-4">
          <p className="text-3xl">Random Number</p>
          <p className="text-3xl">Generator</p>
          <p className="mt-4">Enter the range of generating random numbers</p>
        </div>

        <div className="flex items-center justify-center mt-4">
          <input
            type="number"
            className="w-1/3 mr-2 h-10 border"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="number"
            className="w-1/3 mr-2 h-10 border"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
          <button
            type="button"
            className="w-1/3 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>

        <div className="text-center my-4">
          Random Number : <span>{randomNumber === null ? "N/A" : randomNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default Box1;
