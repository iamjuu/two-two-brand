import React from "react";
import { Livingroom1, Livingroom2, Wall2, BedRoom } from "../assets";

const Services = () => {
  return (
    <div className="min-h-screen bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title - Centered */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-gray-800 leading-tight">
            CAM Designs: Your Gateway
            <br />
            <span className="text-orange-400">To Beautiful Spaces</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
              Welcome to CAM Designs, where creativity meets functionality. We specialize in 
              transforming spaces through innovative interior and exterior design solutions. 
              From modern residential projects to commercial spaces, our team brings 
              expertise in creating beautiful, functional environments that reflect your 
              unique vision and lifestyle.
            </p>
            <a 
              href="#about" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg lg:text-xl transition-colors duration-300 group w-fit"
            >
              Read About Us 
              <svg 
                className="ml-2 w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Content - Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]">
              {/* Large Exterior Design Image - Bottom Left (spans 2 rows) */}
              <div className="row-span-2 col-span-1">
                <div className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={Wall2} 
                    alt="Modern exterior design with contemporary architecture" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Bedroom Image - Top Right */}
              <div className="col-span-1">
                <div className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={BedRoom} 
                    alt="Elegant bedroom interior design" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Living Room Interior Design Image - Bottom Right */}
              <div className="col-span-1">
                <div className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={Livingroom1} 
                    alt="Modern living room interior design" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
