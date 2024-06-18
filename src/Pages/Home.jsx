import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList.jsx";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner.jsx";
import Trending from "../Components/Trending.jsx";

function Home() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    getGameList();
  }, []);

  const getGameList = () => {
    GlobalApi.getGameList.then((res) => {
      setGameList(res.data.results);
    });
  };

  
  return (
    <div className="grid grid-cols-4 gap-4 p-4 overflow-x-hidden">
      <div className="h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {gameList?.length > 0 ? <Banner gameBanner={gameList[7]} /> : null}
        <Trending gameList={gameList} />
      </div>
    </div>
  );
}

export default Home;

