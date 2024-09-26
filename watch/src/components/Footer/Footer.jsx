import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Balaji Watch</h3>
          <p>
            New watches sold, old watches repaired with the highest quality and precision. Trusted since 1980.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul>
            <li><Link to="/" className="hover:underline">Shop</Link></li>
            <li><Link to="/WatchRepair" className="hover:underline">Repair Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/About" className="hover:underline">About Us</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <p>123 Watch Street, Nanded, Maharashtra</p>
          <p>Email: contact@balajiwatch.com</p>
          <p>Phone: +91 7020206909</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Balaji Watch. All rights reserved.
      </div>
    </footer> 
    </div>
  )
}

export default Footer
