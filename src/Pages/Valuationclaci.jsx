import React, { useState } from 'react';

const Valuationcalci = () => {
  const [revenue, setRevenue] = useState(0);
  const [growthRate, setGrowthRate] = useState(0);
  const [marketSize, setMarketSize] = useState(0);
  const [valuation, setValuation] = useState(0);

  const calculateValuation = () => {
    // Calculate the valuation based on the input fields
    const calculatedValuation = revenue * (1 + growthRate);
    setValuation(calculatedValuation);
  };

  return (
    <div className="valuation-calculator">
      <h1>Valuation Calculator</h1>
      <label htmlFor="revenue">Revenue:</label>
      <input
        type="number"
        id="revenue"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
      />
      <label htmlFor="growth-rate">Growth Rate:</label>
      <input
        type="number"
        id="growth-rate"
        value={growthRate}
        onChange={(e) => setGrowthRate(e.target.value)}
      />
      <label htmlFor="market-size">Market Size:</label>
      <input
        type="number"
        id="market-size"
        value={marketSize}
        onChange={(e) => setMarketSize(e.target.value)}
      />
      <button onClick={calculateValuation}>Calculate Valuation</button>
      <p>Valuation: {valuation}</p>
    </div>
  );
};

export default Valuationcalci;