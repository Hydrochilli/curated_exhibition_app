import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string, filter: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

  const handleSearch = () => {
    onSearch(query, filter);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <input
        type="text"
        placeholder="Search for artworks, artists, or collections..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-l-lg w-1/2"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2"
      >
        <option value="all">All</option>
        <option value="artist">Artist</option>
        <option value="topic">Topic</option>
        <option value="year">Year</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;