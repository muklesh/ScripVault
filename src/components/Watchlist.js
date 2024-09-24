import React from 'react';

const Watchlist = () => {
  // Simulated watchlist data
  const watchlist = [
    { name: 'ABC Stock', marketValue: 150 },
    { name: 'XYZ Mutual Fund', marketValue: 250 },
  ];

  return (
    <div>
      <h2>Your Watchlist</h2>
      <ul>
        {watchlist.map((item, index) => (
          <li key={index}>
            {item.name} - Market Value: ${item.marketValue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
