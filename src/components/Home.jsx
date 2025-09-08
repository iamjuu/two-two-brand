import React from "react";
import Button from "../layouts/Button";
import publicAssets from "../../public/index.js";
const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white">
      <div className="absolute inset-0 w-full h-full bg-black opacity-90 -z-20"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90 -z-10"
        src={publicAssets.MainBackground}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
