import { BedroomImage2, BedroomImage5, KitchenImage2, LivingRoomImage2, Wall1 } from "../../../assets";
import { AnimatedTestimonials } from "../../../ui/animated-testimonials/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Exceptional craftsmanship and thoughtful design solutions. They truly understand how to create spaces that feel both elegant and comfortable.",
      name: "James Kim",
      designation: "Property Developer at DataPro Living",
      src: BedroomImage5,
    },
    {
      quote:
        "The design process was smooth and the results exceeded our expectations. The team’s creativity and attention to detail are unmatched.",
      name: "Michael Rodriguez",
      designation: "Interior Designer at Urban Spaces",
      src: Wall1,
    },
    {
      quote:
        "The new layout has significantly improved the functionality and ambiance of our office. The designs are modern yet practical.",
      name: "Emily Watson",
      designation: "Office Manager at CloudScale Interiors",
      src: LivingRoomImage2,
    },
    {
      quote:
        "Exceptional craftsmanship and thoughtful design solutions. They truly understand how to create spaces that feel both elegant and comfortable.",
      name: "James Kim",
      designation: "Property Developer at DataPro Living",
      src: BedroomImage2,
    },
    {
      quote:
        "The kitchen redesign brought new life to our home. The blend of aesthetics and functionality makes cooking and entertaining a joy every day.",
      name: "Lisa Thompson",
      designation: "Kitchen Specialist at FutureNet Designs",
      src: KitchenImage2,
    },
  ];
  
  
  return <AnimatedTestimonials testimonials={testimonials} />;
}
