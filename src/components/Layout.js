import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Layout;
