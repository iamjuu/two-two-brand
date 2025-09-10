import BlogCard from "../layouts/BlogCard";
import DesignModal from "./DesignModal";
import { useDesignModal } from "../hooks/useDesignModal";
import { useState, useEffect } from "react";
import { ShimmerTitle, ShimmerText, ShimmerGrid } from "./Shimmer";
import { 
  BathroomImage1,
  BedroomImage1,
  KitchenImage1,
  LivingRoomImage1,
  ExteriorImage1,
  CourtyardImage1,
  BathroomImage2, BathroomImage3,
  BedroomImage2, BedroomImage3, BedroomImage4, BedroomImage5, BedroomImage6, BedroomImage7,
  KitchenImage2, KitchenImage3,
  LivingRoomImage2, LivingRoomImage3,
  ExteriorImage2, ExteriorImage3, ExteriorImage4, ExteriorImage5, ExteriorImage6, ExteriorImage7, ExteriorImage8, ExteriorImage9, ExteriorImage10, ExteriorImage11, ExteriorImage12, ExteriorImage13, ExteriorImage14, ExteriorImage15, ExteriorImage16, ExteriorImage17, ExteriorImage18, ExteriorImage19, ExteriorImage20, ExteriorImage21,
  CourtyardImage2, CourtyardImage3, CourtyardImage4,
  DiningImage1, DiningImage2, DiningImage3,
  DressingImage1, DressingImage2, DressingImage3, DressingImage4, DressingImage5,
  StaircaseImage1, StaircaseImage2,
  CommercialImage1, CommercialImage2, CommercialImage3,
  CafeImage1, CafeImage2
} from "../assets";

const Blogs = () => {
  const { isModalOpen, selectedCategory, openModal, closeModal } = useDesignModal();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Define image collections for each category
  const imageCollections = {
    bedroom: {
      images: [BedroomImage1, BedroomImage2, BedroomImage3, BedroomImage4, BedroomImage5, BedroomImage6, BedroomImage7]
    },
    livingroom: {
      images: [LivingRoomImage1, LivingRoomImage2, LivingRoomImage3]
    },
    kitchen: {
      images: [KitchenImage1, KitchenImage2, KitchenImage3]
    },
    bathroom: {
      images: [BathroomImage1, BathroomImage2, BathroomImage3]
    },
    exterior: {
      images: [ExteriorImage1, ExteriorImage2, ExteriorImage3, ExteriorImage4, ExteriorImage5, ExteriorImage6, ExteriorImage7, ExteriorImage8, ExteriorImage9, ExteriorImage10, ExteriorImage11, ExteriorImage12, ExteriorImage13, ExteriorImage14, ExteriorImage15, ExteriorImage16, ExteriorImage17, ExteriorImage18, ExteriorImage19, ExteriorImage20, ExteriorImage21]
    },
    courtyard: {
      images: [CourtyardImage1, CourtyardImage2, CourtyardImage3, CourtyardImage4]
    },
    dining: {
      images: [DiningImage1, DiningImage2, DiningImage3]
    },
    dressing: {
      images: [DressingImage1, DressingImage2, DressingImage3, DressingImage4, DressingImage5]
    },
    staircase: {
      images: [StaircaseImage1, StaircaseImage2]
    },
    commercial: {
      images: [CommercialImage1, CommercialImage2, CommercialImage3]
    },
    cafe: {
      images: [CafeImage1, CafeImage2]
    }
  };

  return (
    <div className=" min-h-screen flex flex-col x lg:px-32 px-5 ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isLoading ? (
            <>
              <ShimmerTitle className="h-10 w-48 mb-4" />
              <ShimmerText lines={2} />
            </>
          ) : (
            <>
              <h1 className=" text-4xl font-semibold text-center lg:text-start">
                Our Designs
              </h1>
              <p className=" mt-2 text-center lg:text-start">
                Discover our latest interior design projects and creative solutions that transform spaces into beautiful, functional environments tailored to your lifestyle.
              </p>
            </>
          )}
        </div>

      </div>
      <div 
        className=" my-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {isLoading ? (
          <ShimmerGrid cols={3} className="justify-items-center" />
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div data-aos="fade-up" data-aos-delay="300">
              <BlogCard 
                img={BedroomImage1} 
                headlines="Modern Bedroom Design" 
                description="Transform your bedroom into a serene sanctuary with contemporary design elements and calming aesthetics."
                category="bedroom"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <BlogCard 
                img={LivingRoomImage1} 
                headlines="Elegant Living Room" 
                description="Create a sophisticated living space that combines comfort with style for the perfect family gathering area."
                category="livingroom"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <BlogCard
                img={KitchenImage1}
                headlines="Modern Kitchen Design"
                description="Discover how to elevate your kitchen with premium materials and thoughtful design details."
                category="kitchen"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <BlogCard 
                img={BathroomImage1} 
                headlines="Luxury Bathroom" 
                description="Make a stunning impression with an impressive bathroom design that reflects your personal style."
                category="bathroom"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
              <BlogCard 
                img={ExteriorImage1} 
                headlines="Exterior Design" 
                description="Design a functional and beautiful exterior that seamlessly connects with your home's architecture."
                category="exterior"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <BlogCard 
                img={CourtyardImage1} 
                headlines="Courtyard Design" 
                description="Create a beautiful outdoor space that inspires relaxation and enhances your home experience."
                category="courtyard"
                onViewDesign={openModal}
              />
            </div>
          </div>
        )}
      </div>

      {/* Design Modal */}
      <DesignModal
        isOpen={isModalOpen}
        onClose={closeModal}
        category={selectedCategory}
        imageCollections={imageCollections}
      />
    </div>
  );
};

export default Blogs;
