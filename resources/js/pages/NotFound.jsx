import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Oops! The page you're looking for cannot be found.</p>
        <p className="text-gray-500 mt-2">It seems the link is broken or the page does not exist anymore.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-md">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;