import React from 'react';

function GameListByGenre({ gameGenre, selectedGenre }) {
  return (
    <div className="flex flex-col items-center md:items-start z-10 md:ml-20 lg:ml-0 mt-16">
      <h3 className="text-zinc-800 text-2xl font-bold dark:text-slate-50 mb-4">
        {selectedGenre} Games
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-full">
        {gameGenre.map((game, index) => (
          <div
            key={index}
            className="bg-slate-300 dark:bg-slate-800 p-3 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-48 object-cover rounded-lg mb-2"
              src={game.background_image}
              alt={game.name}
            />
            <p className="text-lg font-semibold mb-1">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameListByGenre;
