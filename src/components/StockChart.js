import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { subscribeToRealTimeData, disconnectSocket } from '../services/websocket';

const StockChart = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [timeRange, setTimeRange] = useState('1yr');
  const [returnsData, setReturnsData] = useState({ '1yr': 0, '3yr': 0, '5yr': 0 });

  const chartRef = useRef(null);

  useEffect(() => {
    const handleStockUpdate = (stockData) => {
      const parsedData = JSON.parse(stockData);
      setDataPoints((prevPoints) => [...prevPoints, parsedData.price]);
      setReturnsData(parsedData.returns);
    };

    subscribeToRealTimeData(handleStockUpdate);

    return () => {
      disconnectSocket();
    };
  }, []);

  // Define chart data
  const chartData = {
    labels: dataPoints.map((_, index) => index + 1), // X-axis for time (simple)
    datasets: [
      {
        label: 'Stock Price (XYZ)',
        data: dataPoints,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
      },
    },
  };

  return (
    <div className="stock-chart-container">
      <h2>Real-Time Stock Price and Returns</h2>

      {/* Chart Display */}
      <Line ref={chartRef} data={chartData} options={chartOptions} />

      {/* Time Range Selection */}
      <div className="time-range-selector">
        <label>Select Time Range: </label>
        <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
          <option value="1yr">1 Year</option>
          <option value="3yr">3 Years</option>
          <option value="5yr">5 Years</option>
        </select>
      </div>

      {/* Returns Display */}
      <div className="returns-display">
        <p>Returns for {timeRange}: {returnsData[timeRange]}%</p>
      </div>
    </div>
  );
};

export default StockChart;
