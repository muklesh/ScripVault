import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  PlusCircleIcon,
  UsersIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white shadow-lg fixed">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h2 className="text-2xl font-bold">ScripVault</h2>
      </div>
      <ul className="mt-6">
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center w-full text-sm font-medium ${
                isActive ? 'bg-gray-700' : 'text-white'
              }`
            }
          >
            <HomeIcon className="h-5 w-5 mr-3" />
            Dashboard
          </NavLink>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <NavLink
            to="/invest"
            className={({ isActive }) =>
              `flex items-center w-full text-sm font-medium ${
                isActive ? 'bg-gray-700' : 'text-white'
              }`
            }
          >
            <PlusCircleIcon className="h-5 w-5 mr-3" />
            Invest
          </NavLink>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `flex items-center w-full text-sm font-medium ${
                isActive ? 'bg-gray-700' : 'text-white'
              }`
            }
          >
            <ChartBarIcon className="h-5 w-5 mr-3" />
            Explore
          </NavLink>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <NavLink
            to="/ask-experts"
            className={({ isActive }) =>
              `flex items-center w-full text-sm font-medium ${
                isActive ? 'bg-gray-700' : 'text-white'
              }`
            }
          >
            <UsersIcon className="h-5 w-5 mr-3" />
            Ask Experts
          </NavLink>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center w-full text-sm font-medium ${
                isActive ? 'bg-gray-700' : 'text-white'
              }`
            }
          >
            <CogIcon className="h-5 w-5 mr-3" />
            Profile
          </NavLink>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center w-full text-sm font-medium ${
                isActive ? 'bg-gray-700' : 'text-white'
              }`
            }
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
            Logout
          </NavLink>
        </li>
      </ul>
      <div className="absolute bottom-0 w-full border-t border-gray-700 mt-auto">
        <p className="text-center text-gray-500 text-xs p-4">
          © 2024 ScripVault. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
