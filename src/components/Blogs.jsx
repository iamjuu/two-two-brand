import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/images/bedroom1.jpg";
import img2 from "../assets/images/livingroom.jpg";
import img3 from "../assets/images/livingroom1.jpg";
import img4 from "../assets/images/Hall1.jpg";
import img5 from "../assets/images/hall2.jpg";
import img6 from "../assets/images/officeroom.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col x lg:px-32 px-5 ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Designs
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Discover our latest interior design projects and creative solutions that transform spaces into beautiful, functional environments tailored to your lifestyle.
          </p>
        </div>

      </div>
      <div className=" my-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <BlogCard 
            img={img1} 
            headlines="Modern Bedroom Design" 
            description="Transform your bedroom into a serene sanctuary with contemporary design elements and calming aesthetics."
          />
          <BlogCard 
            img={img2} 
            headlines="Elegant Living Room" 
            description="Create a sophisticated living space that combines comfort with style for the perfect family gathering area."
          />
          <BlogCard
            img={img3}
            headlines="Luxury Living Spaces"
            description="Discover how to elevate your home with premium materials and thoughtful design details."
          />
          <BlogCard 
            img={img4} 
            headlines="Grand Hall Design" 
            description="Make a stunning first impression with an impressive hall design that reflects your personal style."
          />
          <BlogCard 
            img={img5} 
            headlines="Contemporary Hallway" 
            description="Design a functional and beautiful hallway that seamlessly connects your home's living spaces."
          />
          <BlogCard 
            img={img6} 
            headlines="Professional Office Space" 
            description="Create a productive workspace that inspires creativity and enhances your work-from-home experience."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
