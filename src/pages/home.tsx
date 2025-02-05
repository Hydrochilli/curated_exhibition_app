import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  const handleSearch = (query: string, filter: string) => {
    console.log(`Searching for: ${query} with filter: ${filter}`);
    // Here you would navigate to the search results page or fetch data
  };

  return (
    <div>
      <Header />
      <main className="mt-8">
        <SearchBar onSearch={handleSearch} />
        {/* Additional components like curated exhibitions can go here */}
        <section className="p-4">
          <h2 className="text-xl font-bold mb-4">Curated Virtual Exhibitions</h2>
          {/* Example curated exhibitions placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded shadow">Ming Dynasty Vases</div>
            <div className="border p-4 rounded shadow">Impressionist Masters</div>
            <div className="border p-4 rounded shadow">Modern Sculptures</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;