import React from 'react';
import yourImage from '../../public/image_fx_.jpg';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between py-35">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            Bridging Ideas, Building Futures
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Your Trusted IT Partner for Website & App Development<br />
          </p>
          <div className="flex space-x-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-purple-800 text-white rounded-full font-medium hover:bg-blue-900 transition-colors shadow-md"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 animate-float">
          <img
            src={yourImage}
            alt="Handwritten Notes"
            className="w-full max-w-lg rounded-lg shadow-lg"
            style={{
              objectFit: 'contain', // Or 'cover' depending on your preference
              maxHeight: '400px', // Adjust as needed
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;