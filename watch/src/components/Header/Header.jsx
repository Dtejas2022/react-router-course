import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='fixed w-full'>
      <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <Link to={"/"}>
            <img src="logo.webp" alt="Watch Center Logo" className="h-10 inline-block mr-2" />
            Watch Center
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/WatchRepair" className="hover:text-gray-300">Watch Repair</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>

        {/* Authentication Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-300">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Header
