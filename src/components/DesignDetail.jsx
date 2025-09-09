import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ImageModal from './ImageModal';
import { 
  BathroomImage1, BathroomImage2, BathroomImage3,
  BedroomImage1, BedroomImage2, BedroomImage3, BedroomImage4, BedroomImage5, BedroomImage6, BedroomImage7,
  KitchenImage1, KitchenImage2, KitchenImage3,
  LivingRoomImage1, LivingRoomImage2, LivingRoomImage3,
  ExteriorImage1, ExteriorImage2, ExteriorImage3, ExteriorImage4, ExteriorImage5, ExteriorImage6, ExteriorImage7, ExteriorImage8, ExteriorImage9, ExteriorImage10, ExteriorImage11, ExteriorImage12, ExteriorImage13, ExteriorImage14, ExteriorImage15, ExteriorImage16, ExteriorImage17, ExteriorImage18, ExteriorImage19, ExteriorImage20, ExteriorImage21,
  CourtyardImage1, CourtyardImage2, CourtyardImage3, CourtyardImage4,
  DiningImage1, DiningImage2, DiningImage3,
  DressingImage1, DressingImage2, DressingImage3, DressingImage4, DressingImage5,
  StaircaseImage1, StaircaseImage2,
  CommercialImage1, CommercialImage2, CommercialImage3,
  CafeImage1, CafeImage2
} from '../assets';

const DesignDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Modal functions
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentCategory.images.length - 1 : prev - 1
    );
  };

  const currentCategory = imageCollections[category];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-40">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg shadow-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      {/* Masonry Grid Layout */}
      <div className="px-4 py-8 pt-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {currentCategory.images.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  src={image}
                  alt={`Design ${index + 1}`}
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={currentCategory.images}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default DesignDetail;
