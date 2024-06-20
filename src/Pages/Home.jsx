import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList.jsx";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner.jsx";
import Trending from "../Components/Trending.jsx";
import GameListByGenre from "../Components/GameListByGenre.jsx";

function Home() {
  const [gameList, setGameList] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");
  const [gameGenre, setGameGenre] = useState([]);

  useEffect(() => {
    getGameList();
    gamesByGenreId(17);
  }, []);

  const getGameList = () => {
    GlobalApi.getGameList.then((res) => {
      setGameList(res.data.results);
    });
  };
  
  const gamesByGenreId = (id) => {
    GlobalApi.GameByGenreId(id).then((res) => {
      console.log('GENRE', id)
      setGameGenre(res.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4 overflow-x-hidden z-100">
      <div className="h-full hidden md:block z-1 ">
        <GenreList
          selectedGenre={(name) => setSelectedGenreName(name)}
          genreId={(genreId) => gamesByGenreId(genreId)}
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
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
