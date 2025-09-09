import Button from "../layouts/Button";
import {MainBackground} from "../assets/index.js";
import { useState } from "react";
import { ShimmerTitle, ShimmerText, ShimmerButton } from "./Shimmer";

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoCanPlay = () => {
    console.log('Video can play');
    setIsVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.log('Video failed to load:', e);
    setIsVideoLoaded(true); // Show content even if video fails
    e.target.style.display = 'none';
  };

  const handleVideoLoadStart = () => {
    console.log('Video loading started');
    setIsVideoLoaded(false);
  };
  return (
    <div className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white">
      <div className="absolute inset-0 w-full h-full bg-black opacity-90 -z-20"></div>
      {/* Fallback background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90 -z-15"
       
      ></div>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90 -z-10"
        src={MainBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
        onError={handleVideoError}
        onLoadStart={handleVideoLoadStart}
        onCanPlay={handleVideoCanPlay}
        onPlay={() => console.log('Video started playing')}
      />
      {/* Video loading shimmer overlay */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse -z-5">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      )}
      <div className="relative z-10 w-full lg:w-4/5 space-y-4 sm:space-y-5 mt-6 sm:mt-8 lg:mt-10">
        {!isVideoLoaded ? (
          <>
            <ShimmerTitle className="h-12 w-full mb-4" />
            <ShimmerText lines={4} className="mb-4" />
            <div className="pt-2 sm:pt-4">
              <ShimmerButton />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight">
              Transform Your Space Into Beautiful Living Your Trusted Interior Design Partner
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed">
              Create stunning interiors that reflect your unique style and personality. 
              Our expert designers bring your vision to life with innovative solutions, 
              premium materials, and attention to every detail. From concept to completion, 
              we craft spaces that inspire and delight.
            </p>
            <div className="pt-2 sm:pt-4">
              <Button 
                title="Connect me" 
                as="a"
                href="https://wa.me/918593074903"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
