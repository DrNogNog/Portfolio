import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white py-4 mb-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-end space-x-4 text-lg font-medium">
          <li>
            <Link to="/blogs" className="cursor-pointer hover:text-gray-600">Blogs</Link>
          </li>
          <li>
            <Link to="/work" className={`cursor-pointer hover:text-gray-600 ${location.pathname === '/work' ? 'text-primary' : ''}`}>
              WORK
            </Link>
          </li>
          <li>
            <Link to="/profile" className="cursor-pointer hover:text-gray-600">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;