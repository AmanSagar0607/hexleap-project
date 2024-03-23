// components/CollectionSpotlight/CollectionSpotlight.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface CollectionSpotlightProps {
  isDarkMode: boolean;
  collections: {
    name: string;
    image: string;
    location: string;
    date: string;
    collectionName: string;
  }[];
}

const CollectionSpotlight: React.FC<CollectionSpotlightProps> = ({
  isDarkMode,
  collections,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? collections.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === collections.length - 1 ? 0 : prevIndex + 1));
  };

  const currentCollection = collections[currentIndex];

  return (
    <div
      className={`flex flex-col items-center p-8 rounded-md shadow-md ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <h2 className="text-3xl font-bold mb-8">Collection Spotlight</h2>
      <p className="text-center mb-8">
        Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
      </p>
      <div className="flex items-center mb-8">
        <button
          onClick={handlePrevious}
          className={`mr-4 p-2 rounded-md ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          &lt;
        </button>
        <Image
          src={currentCollection.image}
          alt={currentCollection.name}
          width={300}
          height={300}
          className="rounded-md"
        />
        <button
          onClick={handleNext}
          className={`ml-4 p-2 rounded-md ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          &gt;
        </button>
      </div>
      <div className="text-center">
        <h3 className="font-bold">{currentCollection.name}</h3>
        <p>{currentCollection.location}</p>
        <p>{currentCollection.date}</p>
        <button
          className={`mt-4 px-6 py-3 rounded-md ${
            isDarkMode ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
          }`}
        >
          {currentCollection.collectionName}
        </button>
      </div>
    </div>
  );
};

export default CollectionSpotlight;