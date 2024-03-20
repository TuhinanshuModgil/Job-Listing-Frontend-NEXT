"use client";
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Implement your search logic here
  };

  return (
    <div className="flex items-center justify-center rounded-full w-[900px]">
      <div className="flex items-center border justify-between border-gray-300 rounded-full w-full shadow-md min-w-[100px]">
        <input
          type="text"
          placeholder="Search... (Not yet hooked)"
          value={searchTerm}
          onChange={handleInputChange}
          className="py-2 px-4 rounded-l-full focus:outline-none w-full text-black/80"
        />
        <button
          onClick={handleSearch}
          className="bg-black/70 text-white py-2 px-4 m-1 rounded-full hover:bg-black/80 focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
