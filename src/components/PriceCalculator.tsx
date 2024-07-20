"use client";
import React, { FormEvent, useState } from "react";

const PricingPage = () => {
  const [squareFootage, setSquareFootage] = useState<number>(0);
  const [cost, setCost] = useState<string | null>(null);
  const costPerSqft = 0.25;

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const calculatedCost = (squareFootage * costPerSqft).toFixed(2);
    setCost(calculatedCost);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">
          Pricing Calculator
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Calculate the cost of our power washing services based on your home's
          square footage.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleCalculate}
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="squareFootage"
          >
            Enter Square Footage
          </label>
          <input
            type="number"
            id="squareFootage"
            value={squareFootage}
            onChange={(e) => setSquareFootage(Number(e.target.value))}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="e.g., 2500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Calculate Cost
          </button>
        </form>
        {cost !== null && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Estimated Cost (actual cost may vary)
            </h2>
            <p className="text-xl text-gray-700 mt-2">${cost}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPage;
