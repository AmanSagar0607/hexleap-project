import React from 'react';
import Image from 'next/image';

interface EventListingProps {
  isDarkMode: boolean;
  teamName: string;
  teamLogo: string;
  teamColor: string;
  totalEvents: number;
  sport: string;
  advertisementTitle?: string;
  advertisementText?: string;
}

const EventListing: React.FC<EventListingProps> = ({
  isDarkMode,
  teamName,
  teamLogo,
  teamColor,
  totalEvents,
  sport,
  advertisementTitle,
  advertisementText,
}) => {
  return (
    <div
      className={`flex flex-col items-center p-4 shadow-md ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
      style={{ margin: '8px', borderRadius: 'none' }}
    >
      {advertisementTitle && advertisementText ? (
        <div className="relative">
          <Image
            src={teamLogo}
            alt={`${teamName} Logo`}
            width={200}
            height={200}
          />
          <div className="absolute top-0 right-0 bg-black text-white p-1 rounded-tr-md">
            Ad
          </div>
          <div className="p-4" style={{ maxWidth: '200px', overflowY: 'auto' }}>
            <h4 className="font-bold">{advertisementTitle}</h4>
            <p>{advertisementText}</p>
          </div>
        </div>
      ) : (
        <>
          <Image
            src={teamLogo}
            alt={`${teamName} Logo`}
            width={200}
            height={200}
          />
          <h3 className="mt-4 font-bold text-xl">{teamName}</h3>
          <div className="w-full mt-2">
            <div className="flex justify-between">
              <p className="font-bold">Total Events:</p>
              <p className={`font-bold text-${teamColor}-500 ml-2`}>Sport:</p>
            </div>
            <div className="flex justify-between">
              <p>{totalEvents}</p>
              <p>{sport}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventListing;
