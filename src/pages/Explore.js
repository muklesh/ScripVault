import React, { useState, useEffect } from 'react';

const Explore = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Simulated API fetch for stocks/mutual funds
    const mockStocks = [
      { name: 'ABC Stock', marketValue: 150 },
      { name: 'XYZ Mutual Fund', marketValue: 250 },
    ];
    setStocks(mockStocks);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Stocks and Mutual Funds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stocks.map((stock, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-700">{stock.name}</h3>
            <p className="text-gray-600">Market Value: <span className="font-bold">${stock.marketValue}</span></p>
            <button className="mt-4 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-500 transition duration-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
