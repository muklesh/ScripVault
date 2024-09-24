import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Portfolio from '../components/Portfolio';
import Watchlist from '../components/Watchlist';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from 'recharts';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // Simulated data for the chart
  const data = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4000 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 7000 },
    { name: 'Jul', value: 5000 },
  ];

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-700">Please log in</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <header className="max-w-3xl mx-auto mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome, {user.name}</h1>
        <h2 className="text-2xl mt-2 text-gray-600">
          Your Net Worth: <span className="text-green-600">$10,000</span> (Simulated)
        </h2>
      </header>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Portfolio Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Portfolio</h3>
          <div className="flex-1 overflow-y-auto">
            <Portfolio />
          </div>
          <div className="mt-4">
            <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-500 transition duration-200">
            <a href="/invest" >Add New Investment </a>
            </button>
          </div>
        </div>

        {/* Watchlist Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Watchlist</h3>
          <div className="flex-1 overflow-y-auto">
            <Watchlist />
          </div>
          <div className="mt-4">
            <button className="w-full bg-green-600 text-white rounded-lg py-2 hover:bg-green-500 transition duration-200">
              View All Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* Ask Experts Section */}
      <div className="mt-6 max-w-3xl mx-auto">
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Ask Experts</h3>
            <p className="text-gray-700 mt-2">Need help with your investments? Get personalized advice!</p>
          </div>
          <button className="bg-yellow-600 text-white rounded-lg py-2 px-4 hover:bg-yellow-500 transition duration-200">
          <a href="/ask-experts" >Ask an Expert</a>
          </button>
        </div>
      </div>

      {/* Market Trends Section */}
      <div className="mt-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Market Trends</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
