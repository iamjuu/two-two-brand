import { useState } from 'react';

/**
 * Custom hook for managing design modal state
 * @returns {Object} Modal state and functions
 */
export const useDesignModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return {
    isModalOpen,
    selectedCategory,
    openModal,
    closeModal
  };
};
