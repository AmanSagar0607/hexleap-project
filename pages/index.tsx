// pages/index.tsx
import React, { useState } from 'react';
import EventListing from '../components/EventListing';
import CollectionSpotlight from '../components/CollectionSpotlight';

const IndexPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const eventListingData = [
    {
      teamName: 'Sacramento River Cats',
      teamLogo: '/river-cats-logo.png',
      teamColor: 'red',
      totalEvents: 48,
      sport: 'Baseball',
    },
    {
      teamName: 'Las Vegas Aviators',
      teamLogo: '/aviators-logo.png',
      teamColor: 'purple',
      totalEvents: 28,
      sport: 'Baseball',
    },
    {
      teamName: 'New Jersey Devils',
      teamLogo: '/devils-logo.png',
      teamColor: 'red',
      totalEvents: 15,
      sport: 'Ice Hockey',
    },
    {
      teamName: 'Las Vegas Aviators',
      teamLogo: '/aviators-logo.png',
      teamColor: 'purple',
      totalEvents: 28,
      sport: 'Baseball',
    },
    {
      teamLogo: '/ad.png',
      advertisementTitle: 'Advertisement title',
      advertisementText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  const collectionSpotlightData = [
    {
      name: 'Las Vegas Aviators',
      image: '/aviators-collection.jpg',
      location: 'Las Vegas Ballpark, Las Vegas, Nevada',
      date: 'OCT 15 | SUN | 4:30 PM',
      collectionName: 'Take Flight Collection',
    },
    {
      name: 'Sacramento River Cats',
      image: '/river-cats-collection.jpg',
      location: 'Sutter Health Park, Sacramento, California',
      date: 'OCT 15 | SUN | 4:30 PM',
      collectionName: 'Orange Collection',
    },
    {
      name: 'Sacramento River Cats',
      image: '/river-cats-collection.jpg',
      location: 'Sutter Health Park, Sacramento, California',
      date: 'OCT 15 | SUN | 4:30 PM',
      collectionName: 'Orange Collection',
    },
    {
      name: 'Sacramento River Cats',
      image: '/river-cats-collection.jpg',
      location: 'Sutter Health Park, Sacramento, California',
      date: 'OCT 15 | SUN | 4:30 PM',
      collectionName: 'Orange Collection',
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <button onClick={toggleDarkMode} className="bg-fuchsia-300 rounded-sm ">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h2 className=" text-whi ml-36 mt-5 mb-[-25px] text-left font-sans font-bold border-b-2 border-blue-500 w-14 text-xl">Sport</h2>
      <div className="container mx-auto py-12 flex flex-wrap justify-center">
        {eventListingData.map((data, index) => (
          <EventListing
            key={index}
            isDarkMode={isDarkMode}
            {...data}
          />
        ))}
      </div>
      <div className="mt-16">
        <CollectionSpotlight
          isDarkMode={isDarkMode}
          collections={collectionSpotlightData}
        />
      </div>
    </div>
  );
};

export default IndexPage;
