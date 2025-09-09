import React, { useState, useEffect } from "react";
import { ShimmerImage, ShimmerTitle, ShimmerText } from '../components/Shimmer';

const ServicesCard = ({  data,icon, title,image }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, Math.random() * 2000 + 1000); // Random loading time between 1-3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      {isLoading ? (
        <>
          <div className="p-3 rounded-full transition-colors duration-300 ease-in-out">
            <ShimmerImage height="h-56" className="rounded-lg w-full" />
          </div>
          <ShimmerTitle className="h-6 w-32 mb-2" />
          <ShimmerText lines={3} />
          <ShimmerTitle className="h-4 w-20 mt-2" />
        </>
      ) : (
        <>
          <div className="p-3 rounded-full transition-colors duration-300 ease-in-out">
            <img className="rounded-lg w-full h-56" src={image} alt="img" />
          </div>
          <h1 className="font-semibold text-lg">{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            praesentium asperiores unde veniam, perspiciatis neque!
          </p>

          <h3 className="text-amber-400 cursor-pointer transition duration-300 ease-in-out">
            Learn more
          </h3>
        </>
      )}
    </div>
  );
};

export default ServicesCard;
