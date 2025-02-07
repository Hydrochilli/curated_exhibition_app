// src/pages/Home.tsx
import React, { useState } from 'react';
import Header from '../components/Header.tsx';
import SearchBar from '../components/Searchbar.tsx';

interface Artwork {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImageSmall: string;
}

const Home: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    setArtworks([]);

    try {
      // Step 1: Search for object IDs
      const searchResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
      );
      const searchData = await searchResponse.json();

      if (searchData.total === 0) {
        setError('No results found.');
        setLoading(false);
        return;
      }

      // Step 2: Fetch details for the first 5 artworks
      const objectIDs = searchData.objectIDs.slice(0, 5);
      const artworkPromises = objectIDs.map(async (id: number) => {
        const objectResponse = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );
        return objectResponse.json();
      });

      const artworksData = await Promise.all(artworkPromises);
      setArtworks(artworksData);
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main className="mt-8">
        <SearchBar onSearch={handleSearch} />

        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}

        <section className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {artworks.map((artwork) => (
            <div
              key={artwork.objectID}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              {artwork.primaryImageSmall ? (
                <img
                  src={artwork.primaryImageSmall}
                  alt={artwork.title}
                  className="w-full h-48 object-cover rounded mb-2"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded mb-2 flex items-center justify-center">
                  No Image Available
                </div>
              )}
              <h2 className="text-lg font-bold">{artwork.title}</h2>
              <p className="text-sm text-gray-600">
                {artwork.artistDisplayName || 'Unknown Artist'}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
