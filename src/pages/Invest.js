import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Invest = () => {
  const [amount, setAmount] = useState(0);
  const [investmentType, setInvestmentType] = useState('One-Time');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show toast instead of alert
    toast.success(`Investing $${amount} in ${investmentType}`);
    // Add investment logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Invest in Mutual Funds</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Investment Type Selection */}
          <div>
            <label className="block text-gray-700 mb-2">Investment Type</label>
            <select
              value={investmentType}
              onChange={(e) => setInvestmentType(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="One-Time">One-Time Investment</option>
              <option value="SIP">Systematic Investment Plan (SIP)</option>
            </select>
          </div>

          {/* Investment Amount Input */}
          <div>
            <label className="block text-gray-700 mb-2">Amount ($)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-500 transition duration-200"
          >
            Invest
          </button>
        </form>
      </div>
    </div>
  );
};

export default Invest;
