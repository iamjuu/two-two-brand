import { Wall1 } from "../assets/index.js"
const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
          We are passionate interior designers dedicated to transforming your living 
          spaces into beautiful, functional, and inspiring environments. Our team 
          combines creativity with practical design solutions to create spaces that 
          reflect your unique personality and lifestyle needs.
        </p>
        <p className="text-justify lg:text-start">
          With years of experience in residential and commercial interior design, 
          we specialize in modern, contemporary, and traditional design styles. 
          From concept to completion, we work closely with our clients to ensure 
          every detail meets their vision and exceeds their expectations.
        </p>
        <p className="text-justify lg:text-start">
          Our comprehensive services include space planning, color consultation, 
          furniture selection, lighting design, and project management. We believe 
          that great design should not only look beautiful but also enhance your 
          daily life and bring joy to your home or workspace.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg  " src={Wall1} alt="img" />
      </div>
    </div>
  );
};

export default About;
