import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center p-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">
            Discover amazing content, connect with people, and explore new ideas.
          </p>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto my-10 p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-5 text-center">
            <h2 className="text-2xl font-bold mb-4">Feature One</h2>
            <p className="text-gray-700">
              A brief description of the first feature of your website.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 text-center">
            <h2 className="text-2xl font-bold mb-4">Feature Two</h2>
            <p className="text-gray-700">
              A brief description of the second feature of your website.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 text-center">
            <h2 className="text-2xl font-bold mb-4">Feature Three</h2>
            <p className="text-gray-700">
              A brief description of the third feature of your website.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-5 mt-auto">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
