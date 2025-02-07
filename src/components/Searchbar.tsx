// src/components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex w-full max-w-lg border rounded-lg shadow-md"> 
        <input
          type="text"
          placeholder="Search for artworks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-none p-2 w-full rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};


export default SearchBar;
