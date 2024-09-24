import React, { useState } from 'react';
import { toast } from 'react-toastify';
const AskExperts = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Query submitted: ${query}`);
    
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ask Experts</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            placeholder="Enter your question"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="4"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskExperts;
