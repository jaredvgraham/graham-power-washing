"use client";
import React, { FormEvent, useState } from "react";
import GetAiQuote from "./AiQuote";
import Contact from "./Contact";
import GetAQuote from "./GetAQuote";

const PricingPage: React.FC = () => {
  const [squareFootage, setSquareFootage] = useState<number | string>("");
  const [cost, setCost] = useState<string | null>(null);
  const costPerSqft = 0.25;

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const calculatedCost = squareFootage
      ? (Number(squareFootage) * costPerSqft).toFixed(2)
      : null;
    setCost(calculatedCost);
  };

  return (
    <div className=" py-12">
      <GetAiQuote />
      <Contact />
    </div>
  );
};

export default PricingPage;
