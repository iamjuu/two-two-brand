import Button from "../layouts/Button";
import {MainBackground} from "../assets/index.js";
const Home = () => {
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
        onError={(e) => {
          console.log('Video failed to load:', e);
          // Fallback to background image if video fails
          e.target.style.display = 'none';
        }}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onPlay={() => console.log('Video started playing')}
      />
      <div className="relative z-10 w-full lg:w-4/5 space-y-4 sm:space-y-5 mt-6 sm:mt-8 lg:mt-10">
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
      </div>
    </div>
  );
};

export default Home;
