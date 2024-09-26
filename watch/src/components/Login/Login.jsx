import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Mock login process
    console.log('Logging in with', { email, password });

    // Redirect to dashboard after login (mock)
    // window.location.href = '/dashboard'; // Uncomment and adjust route as needed
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">

        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h1>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Login Form */}
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Log In
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account? 
            <Link to="/register" className="text-blue-500 hover:text-blue-600 ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
