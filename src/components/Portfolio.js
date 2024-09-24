import React from 'react';

const Portfolio = () => {
  // Simulated portfolio data
  const portfolio = [
    { name: 'ABC Mutual Fund', type: 'Mutual Fund', marketValue: 5000, investedValue: 4000 },
    { name: 'XYZ Stock', type: 'Stock', marketValue: 3000, investedValue: 2000 },
  ];

  return (
    <div>
      <h2>Your Portfolio</h2>
      <ul>
        {portfolio.map((item, index) => (
          <li key={index}>
            {item.name} ({item.type}) - Market Value: ${item.marketValue} - Invested: ${item.investedValue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
