import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList.jsx";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner.jsx";
import Trending from "../Components/Trending.jsx";
import GameListByGenre from "../Components/GameListByGenre.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
  const [gameList, setGameList] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");
  const [gameGenre, setGameGenre] = useState([]);

  useEffect(() => {
    // Fetch initial game list
    fetchGameList();

    // Fetch games by genre ID (example ID: 4 for Action genre)
    fetchGamesByGenreId(4);
  }, []);

  const fetchGameList = async () => {
    try {
      const response = await GlobalApi.getGameList();
      setGameList(response.data.results);
    } catch (error) {
      console.error("Error fetching game list:", error);
    }
  };

  const fetchGamesByGenreId = async (id) => {
    try {
      const response = await GlobalApi.getGameByGenreId(id);
      setGameGenre(response.data.results);
    } catch (error) {
      console.error(`Error fetching games for genre ID ${id}:`, error);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4 overflow-x-hidden z-100">
      <div className="h-full hidden md:block z-1">
        <GenreList
          selectedGenre={(name) => setSelectedGenreName(name)}
          genreId={(genreId) => fetchGamesByGenreId(genreId)}
        />
      </div>
      <div className="col-span-4 md:col-span-3 z-10 -mt-20 md:-mt-10">
        {gameList?.length > 0 && gameGenre?.length > 0 ? (
          <div>
            <Banner gameBanner={gameList[7]} />
            <Trending gameList={gameList} />
            <GameListByGenre
              gameGenre={gameGenre}
              selectedGenre={selectedGenreName}
            />
            <Footer />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
