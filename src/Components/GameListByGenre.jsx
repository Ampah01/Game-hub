import React, { useState, useEffect } from 'react';

function GameListByGenre({ gameGenre, selectedGenre, searchQuery }) {
  const [expandedGameIndex, setExpandedGameIndex] = useState(null);
  const [filteredGames, setFilteredGames] = useState(gameGenre);

  useEffect(() => {
    setFilteredGames(
      gameGenre.filter((game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, gameGenre]);

  const handleGameClick = (index) => {
    setExpandedGameIndex(index === expandedGameIndex ? null : index);
  };

  return (
    <div className="flex flex-col items-center md:items-start z-10 md:ml-20 lg:ml-0 mt-16">
      <h3 className="text-zinc-800 text-2xl font-bold dark:text-slate-50 mb-4">
        {selectedGenre} Games
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:w-full">
        {filteredGames.map((game, index) => (
          <div
            key={index}
            className={`bg-slate-300 dark:bg-slate-800 p-3 rounded-lg cursor-pointer transition-transform duration-300 ${
              expandedGameIndex === index
                ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
                : ''
            }`}
            onClick={() => handleGameClick(index)}
            style={{ 
              width: expandedGameIndex === index ? '90vw' : 'auto',
              maxWidth: expandedGameIndex === index ? '600px' : 'auto' 
            }}
          >
            <img
              className="w-full h-48 object-cover rounded-lg mb-2"
              src={game.background_image}
              alt={game.name}
            />
            <p className="text-lg font-semibold mb-1 truncate">
              {game.name}
              <span className="text-[11px] bg-gray-400 text-slate-50 rounded-sm ml-3 p-1">
                {game.metacritic}
              </span>
            </p>
            <div className="flex mb-2">
              <span className="text-xs text-gray-500">
                ⭐ {game.rating} 💬 {game.reviews_count} 🔥 {game.suggestions_count}
              </span>
            </div>
            {expandedGameIndex === index && (
              <div className="mt-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 py-1">
                  Game type: {game.tags[0].name}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 py-1">
                  Game Language: {game.tags[0].language}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 py-1">
                  Date released: {game.released}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameListByGenre;
