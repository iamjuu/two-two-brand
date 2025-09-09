import React from "react";
import Button from "../layouts/Button";
import {MainBackground} from "../assets/index.js";
const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white">
      <div className="absolute inset-0 w-full h-full bg-black opacity-90 -z-20"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90 -z-10"
        src={MainBackground}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Transform Your Space Into Beautiful Living Your Trusted Interior Design Partner
        </h1>
        <p>
          Create stunning interiors that reflect your unique style and personality. 
          Our expert designers bring your vision to life with innovative solutions, 
          premium materials, and attention to every detail. From concept to completion, 
          we craft spaces that inspire and delight.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
