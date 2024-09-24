import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Replace with WebSocket server URL

export const subscribeToRealTimeData = (callback) => {
  socket.on('message', callback); // Listen for stock updates from the server
};

export const disconnectSocket = () => {
  socket.disconnect(); // Disconnect when the component unmounts
};
