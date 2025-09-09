import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for handling design navigation
 * @returns {Function} handleViewDesign - Function to navigate to design detail page
 */
export const useDesignNavigation = () => {
  const navigate = useNavigate();

  const handleViewDesign = (category) => {
    navigate(`/designs/${category}`);
  };

  return { handleViewDesign };
};
